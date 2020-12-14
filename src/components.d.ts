/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppointmentForm {
        "formSubmitUrl": string;
        "isMobileAppointment": boolean;
        "locations": any;
        "minutesStep": string;
        "mobileHours": any;
    }
}
declare global {
    interface HTMLAppointmentFormElement extends Components.AppointmentForm, HTMLStencilElement {
    }
    var HTMLAppointmentFormElement: {
        prototype: HTMLAppointmentFormElement;
        new (): HTMLAppointmentFormElement;
    };
    interface HTMLElementTagNameMap {
        "appointment-form": HTMLAppointmentFormElement;
    }
}
declare namespace LocalJSX {
    interface AppointmentForm {
        "formSubmitUrl"?: string;
        "isMobileAppointment"?: boolean;
        "locations"?: any;
        "minutesStep"?: string;
        "mobileHours"?: any;
    }
    interface IntrinsicElements {
        "appointment-form": AppointmentForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "appointment-form": LocalJSX.AppointmentForm & JSXBase.HTMLAttributes<HTMLAppointmentFormElement>;
        }
    }
}
