import api from "api";

export default {
    submitForm(data) {
        return api().post('submit', data)
    }
}