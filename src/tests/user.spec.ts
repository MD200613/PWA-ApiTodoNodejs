import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { app } from '../server'; // super test démarre le serveur pour nous par magie! (<3)

// //Test de vérification pour voir la réaction face a un login qui n'existe pas
// describe('GET /api/user/login', () => {
//   it('retourne 400 si une mauvaise combinaison email password est faite', async () => {
//     const response = await request(app)
//       .get('/api/user/login')
//       .send({ email: 'test.test@test.com', password: 'ZXC987qwe$$$' })
//       .expect(400);
//     assert.equal(response.body.error, 'email ou  mot de passe incorrect');
//   });
// });

describe('GET /health', () => {
  it('retourne 200', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    assert.equal(response.body.status, 'healthy');
  });
});