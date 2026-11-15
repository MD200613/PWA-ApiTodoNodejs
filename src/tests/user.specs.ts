import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { app } from '../server'; // super test démarre le serveur pour nous par magie! (<3)

describe('GET /api/user/login', () => {
  it('retourne 400 si une mauvaise combinaison email password est faite', async () => {
    const response = await request(app)
      .patch('/api/user/login')
      .send({ email: 'test.test@test.com', password: 'ZXC987qwe$$$' })
      .expect(400);

    assert.equal(response.body.error, 'email ou  mot de passe incorrect');
  });
});