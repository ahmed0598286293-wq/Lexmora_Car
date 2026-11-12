// LEXMORA 3D Vehicle Studio — procedural cars, no remote vehicle images.
// Three.js is the rendering engine; all six vehicle meshes are generated locally below.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const canvas = document.querySelector('#car-config-canvas');
if (canvas) {
  const stage = canvas.parentElement;
  const $ = (selector) => document.querySelector(selector);
  const makeSelect = $('#vehicle-make');
  const modelSelect = $('#vehicle-model');
  const wheelSelect = $('#wheel-style');
  const trimSelect = $('#trim-style');
  const colorLabel = $('#selected-color');
  const zoomLabel = $('#canvas-zoom-label');
  const toast = $('#toast');

  const vehicles = {
    'bmw-m5': { make:'BMW', label:'M5 Competition', year:'2026', price:'$ 121,900', type:'sport', length:4.35, height:1.0, cabin:1.0, note:'M PERFORMANCE · EXECUTIVE SPORTS SEDAN' },
    'mercedes-c200': { make:'Mercedes', label:'C 200 Avantgarde', year:'2020', price:'119,000 ₪', type:'sedan', length:4.25, height:.94, cabin:1, note:'LUXURY SEDAN · AVANTGARDE EDITION' },
    'kia-sportage': { make:'Kia', label:'Sportage EX', year:'2023', price:'240 ₪ / DAY', type:'suv', length:4.05, height:1.18, cabin:1.08, note:'URBAN SUV · FLEXIBLE JOURNEYS' },
    'toyota-corolla': { make:'Toyota', label:'Corolla XLI', year:'2022', price:'185 ₪ / DAY', type:'sedan', length:4.05, height:.9, cabin:.92, note:'EVERYDAY SEDAN · EFFICIENT DRIVE' },
    'audi-a6': { make:'Audi', label:'A6 S line', year:'2018', price:'89,000 ₪', type:'sport', length:4.3, height:.96, cabin:1, note:'BUSINESS CLASS · S LINE DESIGN' },
    'hyundai-tucson': { make:'Hyundai', label:'Tucson Premium', year:'2024', price:'260 ₪ / DAY', type:'suv', length:4.1, height:1.16, cabin:1.08, note:'MODERN SUV · DAILY VERSATILITY' }
  };
  const colors = [
    {hex:'#f0f3f5',name:'ICE PEARL'}, {hex:'#bfc7ce',name:'ARCTIC SILVER'},
    {hex:'#242a32',name:'GRAPHITE'}, {hex:'#143b78',name:'SAN MARINO BLUE'},
    {hex:'#8e2d32',name:'TORONTO RED'}, {hex:'#d4c7a8',name:'CHAMPAGNE'},
    {hex:'#101820',name:'OBSIDIAN BLACK'}, {hex:'#647d70',name:'BRITISH GREEN'}
  ];
  const state = { model:'bmw-m5', color:'#f0f3f5', colorName:'ICE PEARL', wheel:'factory', trim:'chrome', zoom:1, autoRotate:true };
  let scene, camera, renderer, carRoot, carPaintMaterials=[], wheelMaterials=[], trimMaterials=[];
  let isDragging=false, previousX=0, previousY=0, pointerMoved=false, toastTimer;
  let frameId=0;

  const paintMaterial = () => new THREE.MeshPhysicalMaterial({ color:state.color, metalness:.72, roughness:.23, clearcoat:1, clearcoatRoughness:.12 });
  const darkGlass = new THREE.MeshPhysicalMaterial({ color:0x101923, metalness:.25, roughness:.12, transparent:true, opacity:.91, clearcoat:1 });
  const rubber = new THREE.MeshStandardMaterial({ color:0x101216, roughness:.82 });
  const metal = new THREE.MeshStandardMaterial({ color:0x9ca8b4, metalness:.9, roughness:.24 });
  const blackMetal = new THREE.MeshStandardMaterial({ color:0x171d25, metalness:.72, roughness:.32 });
  const headlightMat = new THREE.MeshStandardMaterial({ color:0xdceeff, emissive:0x789cc4, emissiveIntensity:1.15, metalness:.25, roughness:.15 });
  const tailMat = new THREE.MeshStandardMaterial({ color:0xb51e2b, emissive:0x610711, emissiveIntensity:.7, roughness:.25 });

  function notify(message){ if(!toast)return; toast.textContent=message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('show'),2200); }
  function mat(color, metalness=.3, roughness=.4){ return new THREE.MeshStandardMaterial({color,metalness,roughness}); }
  function addMesh(parent, geometry, material, x=0,y=0,z=0){ const mesh=new THREE.Mesh(geometry,material); mesh.position.set(x,y,z); mesh.castShadow=true; mesh.receiveShadow=true; parent.add(mesh); return mesh; }
  function roundedBox(w,h,d,r,material){ const shape=new THREE.Shape(); shape.moveTo(-w/2+r,-h/2); shape.lineTo(w/2-r,-h/2); shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r); shape.lineTo(w/2,h/2-r); shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2); shape.lineTo(-w/2+r,h/2); shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r); shape.lineTo(-w/2,-h/2+r); shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2); const geo=new THREE.ExtrudeGeometry(shape,{depth:d,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:r*.35,bevelThickness:r*.35,curveSegments:8}); geo.translate(0,0,-d/2); return addMesh(carRoot,geo,material); }
  function profileMesh(parent, points, depth, material){ const shape=new THREE.Shape(); shape.moveTo(points[0][0],points[0][1]); points.slice(1).forEach(p=>shape.lineTo(p[0],p[1])); shape.closePath(); const geo=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSegments:3,bevelSize:.045,bevelThickness:.035,curveSegments:12}); geo.translate(0,0,-depth/2); return addMesh(parent,geo,material); }

  function buildCar(id){
    const spec=vehicles[id]; carRoot=new THREE.Group(); carPaintMaterials=[]; wheelMaterials=[]; trimMaterials=[];
    const paint=paintMaterial(); carPaintMaterials.push(paint);
    const trimMat=mat(state.trim==='shadow'?0x161b22:state.trim==='sport'?0x8da9bd:0xb9c5ce,.82,.24); trimMaterials.push(trimMat);
    const scale=spec.length/4.3, suv=spec.type==='suv', sport=spec.type==='sport';
    const L=2.05*scale, H=spec.height;
    // Main lower body and sculpted upper shoulder are separate paintable 3D meshes.
    profileMesh(carRoot,[[-L,.43],[-L*.98,.78],[-L*.78,.91],[-L*.48,.98],[L*.55,.94],[L*.92,.82],[L,.58],[L*.96,.43]],1.42,paint);
    profileMesh(carRoot,[[-L*.72,.82],[-L*.52,H*.82],[-L*.25,H*.98],[L*.34,H*.98],[L*.67,.91],[L*.87,.78],[L*.74,.76],[-L*.55,.76]],1.12,paint);
    // Cabin silhouette and glass band.
    const cabinY=H+(suv?.05:0);
    profileMesh(carRoot,[[-L*.48,.94],[-L*.28,cabinY+.47],[-L*.08,cabinY+.5],[L*.28,cabinY+.47],[L*.57,.94]],1.08,darkGlass);
    // Side window pillars and belt line.
    for(const z of [-.55,.55]){
      const pillarMat=blackMetal;
      for(const x of [-L*.18,L*.28]){ const pillar=addMesh(carRoot,new THREE.BoxGeometry(.055,.47,.035),pillarMat,x,cabinY+.22,z); pillar.rotation.z=x<0?-.28:.22; }
      const belt=addMesh(carRoot,new THREE.BoxGeometry(L*1.06,.035,.025),metal,0,.91,z); belt.position.x=0;
    }
    // Hood and trunk highlights, front/rear bumpers.
    addMesh(carRoot,new THREE.BoxGeometry(L*.43,.08,1.38),paint, L*.69,.72,0);
    addMesh(carRoot,new THREE.BoxGeometry(L*.24,.1,1.36),paint,-L*.82,.7,0);
    addMesh(carRoot,new THREE.BoxGeometry(.16,.22,1.36),blackMetal,L,.58,0);
    addMesh(carRoot,new THREE.BoxGeometry(.14,.2,1.36),blackMetal,-L,.58,0);
    // Front and rear light signatures.
    for(const z of [-.49,.49]){
      addMesh(carRoot,new THREE.BoxGeometry(.11,.09,.16),headlightMat,L*.94,.79,z);
      addMesh(carRoot,new THREE.BoxGeometry(.09,.075,.17),tailMat,-L*.94,.78,z);
      addMesh(carRoot,new THREE.BoxGeometry(.34,.11,.035),blackMetal,L*.88,.55,z*1.04);
    }
    // Wheels: independent meshes so finish changes are truly 3D.
    const wheelX=[-L*.62,L*.63];
    wheelX.forEach(x=>[-.76,.76].forEach(z=>{
      const tire=addMesh(carRoot,new THREE.CylinderGeometry(.39,.39,.22,40,1),rubber,x,.43,z); tire.rotation.x=Math.PI/2;
      const rimMat=mat(0xc2cbd4,.92,.22); wheelMaterials.push(rimMat);
      const rim=addMesh(carRoot,new THREE.CylinderGeometry(.285,.285,.232,36,1),rimMat,x,.43,z); rim.rotation.x=Math.PI/2;
      const hub=addMesh(carRoot,new THREE.CylinderGeometry(.075,.075,.245,24),blackMetal,x,.43,z); hub.rotation.x=Math.PI/2;
      const spokeCount=state.wheel==='black'?10:state.wheel==='bronze'?7:state.wheel==='diamond'?5:9;
      for(let i=0;i<spokeCount;i++){
        const a=i*Math.PI*2/spokeCount;
        const spoke=addMesh(carRoot,new THREE.BoxGeometry(.025,.26,.025),rimMat,x+Math.sin(a)*.13,.43+Math.cos(a)*.13,z+(z>0?.125:-.125));
        spoke.rotation.z=-a;
      }
      const disc=addMesh(carRoot,new THREE.TorusGeometry(.235,.012,8,36),metal,x,.43,z+(z>0?.125:-.125));
      if(sport){ const caliper=addMesh(carRoot,new THREE.BoxGeometry(.07,.17,.055),mat(0x1e5fc4,.45,.3),x+.19,.45,z+(z>0?.14:-.14)); caliper.rotation.z=-.18; }
    }));
    // Grille, mirrors, roof details and door seams.
    addMesh(carRoot,new THREE.BoxGeometry(.035,.25,.52),blackMetal,L*.985,.62,0);
    for(const z of [-.7,.7]){
      const mirror=addMesh(carRoot,new THREE.BoxGeometry(.2,.11,.18),paint,L*.25,1.02,z); mirror.rotation.z=-.12;
      const seam=addMesh(carRoot,new THREE.BoxGeometry(.012,.5,.012),blackMetal,-L*.03,.68,z*.82); seam.rotation.z=.02;
      const handle=addMesh(carRoot,new THREE.BoxGeometry(.16,.025,.025),trimMat,L*.12,.88,z*.82);
    }
    if(suv){ addMesh(carRoot,new THREE.BoxGeometry(L*.74,.045,.09),blackMetal,-.03,H+.55,.0); }
    carRoot.scale.setScalar(state.zoom);
    scene.add(carRoot);
    // Subtle ground shadow under the vehicle.
    const shadow=new THREE.Mesh(new THREE.CircleGeometry(2.5,64),new THREE.MeshBasicMaterial({color:0x07101a,transparent:true,opacity:.28})); shadow.rotation.x=-Math.PI/2; shadow.scale.set(1.18,.42,1); shadow.position.y=.015; carRoot.add(shadow);
    applyFinishes();
  }

  function applyFinishes(){
    carPaintMaterials.forEach(m=>m.color.set(state.color));
    wheelMaterials.forEach(m=>{ if(state.wheel==='black')m.color.set('#20252b'); else if(state.wheel==='bronze')m.color.set('#9a6742'); else if(state.wheel==='diamond')m.color.set('#d5dce2'); else m.color.set('#c2cbd4'); });
    trimMaterials.forEach(m=>m.color.set(state.trim==='shadow'?'#161b22':state.trim==='sport'?'#8da9bd':'#b9c5ce'));
  }
  function updateLabels(){ const v=vehicles[state.model]; $('#config-make-label').textContent=`${v.make.toUpperCase()} / LEXMORA 3D STUDIO`; $('#config-model-label').innerHTML=`${v.label} <span>${v.year}</span>`; $('#config-model-note').textContent=v.note; $('#config-price-label').textContent=v.price; $('#config-view-label').textContent='360° INTERACTIVE · THREE.JS'; const idx=Object.keys(vehicles).indexOf(state.model)+1; $('.config-index').textContent=`${String(idx).padStart(2,'0')} / 06`; }
  function syncColor(){ document.querySelectorAll('.config-color-swatch').forEach(b=>{const on=b.dataset.color?.toLowerCase()===state.color.toLowerCase();b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));}); if(colorLabel)colorLabel.textContent=state.colorName; }
  function setModel(id){ if(!vehicles[id])return; state.model=id; const v=vehicles[id]; if(makeSelect)makeSelect.value=v.make; if(modelSelect)modelSelect.value=id; if(carRoot)scene.remove(carRoot); buildCar(id); updateLabels(); syncColor(); saveState(); }
  function saveState(){ try{localStorage.setItem('LEXMORA_3d_config',JSON.stringify({model:state.model,color:state.color,colorName:state.colorName,wheel:state.wheel,trim:state.trim}));}catch{} }
  function resize(){ const w=Math.max(1,stage.clientWidth),h=Math.max(1,stage.clientHeight); renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); }

  try{
    renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)); renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.15; renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    scene=new THREE.Scene(); scene.background=null;
    camera=new THREE.PerspectiveCamera(34,1,.1,100); camera.position.set(5.9,3.15,7.2); camera.lookAt(0,.8,0);
    scene.add(new THREE.HemisphereLight(0xdceaff,0x27313d,2.15));
    const key=new THREE.DirectionalLight(0xffffff,3.3); key.position.set(2,7,5); key.castShadow=true; key.shadow.mapSize.set(1024,1024); scene.add(key);
    const rimLight=new THREE.DirectionalLight(0x8cbcff,2.2); rimLight.position.set(-5,3,-4); scene.add(rimLight);
    const fill=new THREE.PointLight(0xc9ff3d,18,12); fill.position.set(0,2,4); scene.add(fill);
    const floor=new THREE.Mesh(new THREE.CircleGeometry(7,96),new THREE.MeshStandardMaterial({color:0x293441,roughness:.72,metalness:.18})); floor.rotation.x=-Math.PI/2; floor.position.y=-.015; floor.receiveShadow=true; scene.add(floor);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(2.8,.012,8,128),new THREE.MeshBasicMaterial({color:0x6b91b6,transparent:true,opacity:.48})); ring.rotation.x=Math.PI/2; ring.position.y=.025; ring.scale.set(1,.38,1); scene.add(ring);
    const saved=JSON.parse(localStorage.getItem('LEXMORA_3d_config')||'null'); if(saved&&vehicles[saved.model])Object.assign(state,saved);
    if(makeSelect)makeSelect.value=vehicles[state.model].make; if(modelSelect)modelSelect.value=state.model; if(wheelSelect)wheelSelect.value=state.wheel; if(trimSelect)trimSelect.value=state.trim;
    buildCar(state.model); updateLabels(); syncColor(); resize();
  }catch(error){ console.error(error); notify('تعذر تشغيل عارض 3D. تأكد من دعم WebGL والاتصال لتحميل مكتبة Three.js.'); }

  function animate(){ frameId=requestAnimationFrame(animate); if(carRoot&&state.autoRotate&&!isDragging)carRoot.rotation.y+=.0028; if(renderer&&scene&&camera)renderer.render(scene,camera); }
  animate(); window.addEventListener('resize',resize); if('ResizeObserver'in window)new ResizeObserver(resize).observe(stage);

  makeSelect?.addEventListener('change',()=>{ const first=Object.keys(vehicles).find(id=>vehicles[id].make===makeSelect.value); if(first)setModel(first); });
  modelSelect?.addEventListener('change',()=>setModel(modelSelect.value));
  document.querySelectorAll('.config-color-swatch').forEach(button=>button.addEventListener('click',()=>{state.color=button.dataset.color;state.colorName=button.dataset.name||'CUSTOM';applyFinishes();syncColor();saveState();}));
  wheelSelect?.addEventListener('change',()=>{state.wheel=wheelSelect.value;if(carRoot){scene.remove(carRoot);buildCar(state.model);}saveState();});
  trimSelect?.addEventListener('change',()=>{state.trim=trimSelect.value;applyFinishes();saveState();});
  canvas.addEventListener('pointerdown',e=>{isDragging=true;pointerMoved=false;previousX=e.clientX;previousY=e.clientY;state.autoRotate=false;canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!isDragging||!carRoot)return;const dx=e.clientX-previousX;const dy=e.clientY-previousY;if(Math.abs(dx)+Math.abs(dy)>1)pointerMoved=true;carRoot.rotation.y+=dx*.009;carRoot.rotation.x=THREE.MathUtils.clamp(carRoot.rotation.x+dy*.003,-.18,.18);previousX=e.clientX;previousY=e.clientY;});
  const endDrag=()=>{isDragging=false;}; canvas.addEventListener('pointerup',endDrag);canvas.addEventListener('pointercancel',endDrag);canvas.addEventListener('dblclick',()=>{if(carRoot){carRoot.rotation.set(0,0,0);state.autoRotate=true;}});
  $('#canvas-zoom-in')?.addEventListener('click',()=>{state.zoom=Math.min(1.35,state.zoom+.08);if(carRoot)carRoot.scale.setScalar(state.zoom);if(zoomLabel)zoomLabel.textContent=`${Math.round(state.zoom*100)}%`;});
  $('#canvas-zoom-out')?.addEventListener('click',()=>{state.zoom=Math.max(.72,state.zoom-.08);if(carRoot)carRoot.scale.setScalar(state.zoom);if(zoomLabel)zoomLabel.textContent=`${Math.round(state.zoom*100)}%`;});
  $('#config-reset')?.addEventListener('click',()=>{Object.assign(state,{model:'bmw-m5',color:'#f0f3f5',colorName:'ICE PEARL',wheel:'factory',trim:'chrome',zoom:1,autoRotate:true});if(wheelSelect)wheelSelect.value=state.wheel;if(trimSelect)trimSelect.value=state.trim;setModel(state.model);if(carRoot)carRoot.rotation.set(0,0,0);notify('تمت إعادة ضبط إعداد السيارة.');});
  $('#config-save')?.addEventListener('click',e=>{saveState();e.currentTarget.classList.toggle('is-saved');e.currentTarget.textContent=e.currentTarget.classList.contains('is-saved')?'♥':'♡';notify('تم حفظ إعداد السيارة على هذا المتصفح.');});
  $('#config-share')?.addEventListener('click',async()=>{const share={...state};try{await navigator.clipboard.writeText(`${location.href.split('#')[0]}?car=${share.model}&color=${encodeURIComponent(share.color)}`);notify('تم نسخ رابط إعداد السيارة.');}catch{notify('تعذر النسخ تلقائياً في هذا المتصفح.');}});
}
