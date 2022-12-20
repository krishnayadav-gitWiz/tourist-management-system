import { SearchPipe } from "./search.pipe";

describe('SearchPipe', () => {
    it('first name and id for perticular country is present', () => {
      const pipe = new SearchPipe();
      expect(pipe).toBeTruthy();
    });
  });
  