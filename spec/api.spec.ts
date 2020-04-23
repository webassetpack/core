
import * as api from '../src/api';
import {WAPPlugin} from '../src/WAPPlugin';

describe('Public API', () => {
    it('WAPPPlugin', () => {
        expect(api.WAPPlugin).toBe(WAPPlugin);
    });

    describe('Types/Interfaces', () => {
        // These tests would fail on typescript compile
        // if they were missing from the public api
        
        it('Manifest', () => {
            let ignore: api.Manifest = null;
            expect(ignore).toBe(null);
        });
    
        it('IManifestItem', () => {
            let ignore: api.IManifestItem = null;
            expect(ignore).toBe(null);
        });
    });
});
