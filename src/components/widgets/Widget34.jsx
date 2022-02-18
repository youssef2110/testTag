import { Portlet, Widget8, Widget10, Widget11 } from "@blueupcode/components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Component } from "react"
import { connect } from "react-redux"
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import Chart from "@blueupcode/apexcharts"

class Widget34Component extends Component {
  state = {
    highlight: "5,726",
    title: "Unique visits",
    avatar: () => (
      <Widget8.Avatar display circle variant="label-danger" className="m-0">
        <FontAwesomeIcon icon={SolidIcon.faLink} />
      </Widget8.Avatar>
    )
  }

  render() {
    const { highlight, title, avatar: WidgetAvatar } = this.state

    return (
      <Portlet>
        <Portlet.Body>
          {/* BEGIN Widget */}
          <Widget10.Item className="p-0">
            <Widget10.Content>
              <Widget10.Title>{highlight}</Widget10.Title>
              <Widget10.Subtitle>{title}</Widget10.Subtitle>
            </Widget10.Content>
            <Widget10.Addon>
              <WidgetAvatar />
            </Widget10.Addon>
          </Widget10.Item>
          {/* END Widget */}
        </Portlet.Body>
        <Widget34Chart theme={this.props.theme} />
      </Portlet>
    )
  }
}

class Widget34Chart extends Component {
  state = {
    // Chart options
    options: {
      theme: {
        mode: this.props.theme,
        palette: "palette1"
      },
      chart: {
        background: "transparent",
        sparkline: {
          enabled: true
        }
      },
      fill: {
        type: "solid",
        colors: ["#f44336"],
        opacity: 0.1
      },
      stroke: {
        show: true,
        colors: ["#f44336"]
      },
      markers: {
        colors: this.props.theme === "dark" ? "#424242" : "#fff",
        strokeWidth: 4,
        strokeColors: ["#f44336"]
      },
      tooltip: {
        marker: {
          show: false
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        crosshairs: {
          show: false
        }
      }
    },
    // Chart series data
    series: [
      {
        name: "Visit",
        data: [560, 400, 480, 340, 780, 640]
      }
    ]
  }

  componentDidUpdate(prevProps) {
    if (this.props.theme !== prevProps.theme) {
      const newState = this.state

      // Change chart options
      newState.options.theme = {
        mode: this.props.theme,
        palette: "palette1"
      }
      newState.options.markers.colors =
        this.props.theme === "dark" ? "#424242" : "#fff"

      this.setState(newState)
    }
  }

  render() {
    const { options, series } = this.state

    return (
      <Widget11 bottom>
        <Chart type="area" options={options} series={series} height={200} />
      </Widget11>
    )
  }
}

function mapStateToProps(state) {
  return {
    theme: state.page.theme
  }
}

export default connect(mapStateToProps)(Widget34Component)
