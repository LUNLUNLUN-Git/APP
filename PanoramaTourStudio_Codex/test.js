import * as THREE from 'three';

function test() {
  const g = new THREE.SphereGeometry(100, 32, 16);
  // Get positions and UVs
  const pos = g.attributes.position;
  const uv = g.attributes.uv;

  console.log("Checking SphereGeometry mapping:");
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const u = uv.getX(i);
    const v = uv.getY(i);

    // Look at equator only (y roughly 0)
    if (Math.abs(y) < 1) {
      if (Math.abs(z - (-100)) < 1 && Math.abs(x) < 1) console.log("Forward (0, 0, -r) -> U:", u);
      if (Math.abs(z - 100) < 1 && Math.abs(x) < 1) console.log("Back (0, 0, r) -> U:", u);
      if (Math.abs(x - 100) < 1 && Math.abs(z) < 1) console.log("Right (r, 0, 0) -> U:", u);
      if (Math.abs(x - (-100)) < 1 && Math.abs(z) < 1) console.log("Left (-r, 0, 0) -> U:", u);
    }
  }
}
test();
