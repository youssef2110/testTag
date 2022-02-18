import { Layout } from "@blueupcode/components"


function BlankLayoutWithoutButtons({ children }) {

  return (
    <Layout type="holder">
      <Layout type="wrapper">
        <Layout style={{background : '#fff', height : '100%'}}>{children}</Layout>
      </Layout>
    </Layout>
  )
}

export default BlankLayoutWithoutButtons
