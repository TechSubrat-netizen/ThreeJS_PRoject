import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

function App() {
  //attabing things oinside the browser
  const renderer= new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
//camera properties
const scene= new THREE.Scene()
const camera= new THREE.PerspectiveCamera()
const axeshelper= new THREE.AxesHelper(5)
scene.add(axeshelper)
camera.position.set(0,2,5)


const orbit= new OrbitControls(camera,renderer.domElement)

const boxGeometry= new THREE.BoxGeometry();
const boxMaterial= new THREE.MeshBasicMaterial({color:0x00FF00});
const box= new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box)
// creating a plane
const planeGeometry= new THREE.PlaneGeometry(30,30)
const planeMaterial=new THREE.MeshBasicMaterial({color:0xFFFFFF})
const plane=new THREE.Mesh(planeGeometry,planeMaterial)
scene.add(plane)
//creating gridHelper

//Animation Loop
function animate(time){
  box.rotation.x=time/1000;
  box.rotation.y=time/1000;
  renderer.render(scene,camera)
}
renderer.setAnimationLoop(animate)
orbit.update();

renderer.render(scene,camera)
  return (
    <div>{renderer}</div>
  )
}

export default App