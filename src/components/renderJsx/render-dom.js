export default {
  functional: true,
  props: {
    name: String,
    renderDom: Function
  },
  render: (h, ctx) => {
    return ctx.props.renderDom(h,ctx.props.name)
  }
}