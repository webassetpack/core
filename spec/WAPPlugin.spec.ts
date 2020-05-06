
import {WAPPlugin} from '../src/WAPPlugin';

class TestPlugin extends WAPPlugin {
    protected async _read(data: Uint8Array, type: string): Promise<any> {
        return;
    }
}

describe('WAPPlugin', () => {
    let plugin: WAPPlugin = new TestPlugin({test:true});

    it('getName() should return constructor name', () => {
        expect(plugin.getName()).toBe('TestPlugin');
    });

    it('getOptions()', () => {
        expect(plugin.getOptions()).toEqual({test:true});
    });

    it('read() should invoke _read', () => {
        let spy: jasmine.Spy = spyOn<any>(plugin, '_read');
        let data: Uint8Array = new Uint8Array();
        plugin.read(data);
        expect(spy).toHaveBeenCalledWith(data, 'application/octet-stream');
    });
});
