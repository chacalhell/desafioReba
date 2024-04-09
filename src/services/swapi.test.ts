import {SwapiService} from './swapi';

describe('swappi', () => {
  it('people all should return 10 length', async () => {
    const response = await SwapiService.people.all();
    expect(response.length).toBe(10);
  }, 10000);

  it('people find should return Luke Skywalker', async () => {
    const expectedFilms = [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ];
    const response = await SwapiService.people.find('1');
    expect(response.name).toBe('Luke Skywalker');
    expect(response.films).toEqual(expectedFilms);
  });
});
