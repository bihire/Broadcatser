export default (model) => {
    return model.length <= 0 ? 1 : model[model.length - 1].id + 1
}