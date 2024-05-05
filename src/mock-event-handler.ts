import EventHandler from "./event-handler"

export default class MockEventHandler implements EventHandler {
    addEventListenerToClass(className: string, event: string, fn: any) {
       console.log(className, event, fn)
    }
}