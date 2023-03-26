const { Videogames, Genres, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogames.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogames.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogames.create({ name: 'Super Mario Bros' });
      });
      it('should return name not found', done => {
        Videogame.findAll()
        .then(r => expect(r[1].name).to.be.false('Name Not Found'))
        .catch(() => done())
      });
    });
  });
});

describe('Validators', () => {
  beforeEach(() => Genres.sync({ force: true }));
  describe('genre', () => {
    it('should throw an error if name is null', (done) => {
      Genres.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });
    it('should work when its a valid name', () => {
      Genres.create({name: "gfcvgj"})
    });
    it('should return name not found', done => {
      Genres.findAll()
      .then(r => expect(r[1].name).to.be.false('NameNotFound'))
      .catch(() => done())
    });
  });
});