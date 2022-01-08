import { View } from "./view.js";
export class MensagemView extends View {
    template(message) {
        return `
            <p class="alert alert-info">${message}</p>
        `;
    }
}
