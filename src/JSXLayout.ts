import { KoLayout, IKoLayout, KnockoutTemplateBindingHandlerOptions } from "si-kolayout";
import * as ko from "knockout";

export class JSXLayout<T extends { key?: string }> extends KoLayout {


    
    
    get childLayouts() {
        return this.templateNodes.childLayouts;
    }

    constructor(public attributes: T, public templateNodes: JSX.Element) {
        super({
            nodes: [templateNodes as any as HTMLElement],
            afterRender: (...args: any[]) => this.afterRender(...args)
        })
         
        
    }

    afterRender(...args: any[]) {
        console.log("afterRender");
    }
    

    toJSON() {
        return ko.toJS(this);
    }
}