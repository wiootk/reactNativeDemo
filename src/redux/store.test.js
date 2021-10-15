const rewire = require("rewire")
const store = rewire("./store")
const getStore = store.__get__("getStore")
// @ponicode
describe("getStore", () => {
    test("0", () => {
        let callFunction = () => {
            getStore("Marketing")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getStore("Software Engineer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getStore("Sales")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getStore("Data Scientist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getStore("Chief Product Officer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getStore(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
