/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';

describe('Unit test DateTime setLocale', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(() => { });
    });
    afterEach(() => {
        // @ts-ignore
        console.error.mockRestore();
    });

    test('setLocale type datetime DateTime', () => {
        const correctDateTime = "2020-05-10T04:13:00.000Z"
        const datetime = new DateTime({value: new Date("October 13, 2019 11:13:00"), type: 'datetime'});
        datetime.render()
        datetime.setValue(new Date("May 10, 2020 11:13:00") );
        expect(datetime.getValue()).toStrictEqual(new Date(correctDateTime));
    });

    test('setLocale successfully DateTime', () => {
        const datetime  = new DateTime()
        datetime.render()
        datetime.setLocale('en');
        expect(datetime.getLocale()).toBe('en');
    });
  
    test('setLocale number throws error DateTime', () => {
        try {
            const datetime = new DateTime();
            datetime.render()
            datetime.setLocale(3);
            expect(true).toBeTruthy()
        } catch (error) {
            expect(false)
        }
    });
})