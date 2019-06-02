import React, {Component} from 'react'
import throttle from 'raf-throttle'
import {Motion, spring} from 'react-motion'
import SvgLogo from './svg-logo'

const limitTo01Range = (x: number, a: number): number => x / (Math.abs(x) + a)

export default class Logo extends Component {
  state: {
    tiltx: number,
    tilty: number,
    degree: number
  }

  constructor (props) {
    super(props)

    this.state = {
      tiltx: 0,
      tilty: 0,
      degree: 0
    }

    this.handleMouseMove = throttle(this.handleMouseMove.bind(this))
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleDeviceOrientation = throttle(this.handleDeviceOrientation.bind(this))
    this.tilt = this.tilt.bind(this)
  }

  componentDidMount () {
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('mouseleave', this.handleMouseLeave)
    window.addEventListener('deviceorientation', this.handleDeviceOrientation)
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('mouseleave', this.handleMouseLeave)
    window.removeEventListener('deviceorientation', this.handleDeviceOrientation)
  }

  handleMouseMove (event) {
    const rect = this.$wrapper.getBoundingClientRect()
    const cx = Math.ceil(rect.width / 2.0)
    const cy = Math.ceil(rect.height / 2.0)
    const dx = limitTo01Range(event.pageX - cx - rect.left, 128) * 128
    const dy = limitTo01Range(event.pageY - cy - rect.top, 64) * 64

    const tiltx = -(dy / cy)
    const tilty = dx / cx
    this.tilt(tiltx, tilty)
  }

  handleMouseLeave () {
    this.tilt(0, 0)
  }

  handleDeviceOrientation (event: DeviceOrientationEvent) {
    const tiltx = limitTo01Range(event.beta, 10) * -1
    const tilty = limitTo01Range(event.gamma, 10)
    this.tilt(tiltx, tilty)
  }

  tilt (tiltx: number, tilty: number) {
    const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
    const degree = radius * 20
    this.setState({tiltx, tilty, degree})
  }

  render () {
    const {tiltx, tilty, degree} = this.state
    const springParams = {stiffness: 100, damping: 8}

    return (
      <Motion
        defaultStyle={{
          backgroundTransformScale: 1,
          degree: 0,
          tiltx: 0,
          tilty: 0,
          foregroundTranslateZ: 0
        }}
        style={{
          backgroundTransformScale: spring(0.999),
          degree: spring(degree, springParams),
          tiltx: spring(tiltx, springParams),
          tilty: spring(tilty, springParams),
          foregroundTranslateZ: spring(10)
        }}
        children={(
          style: {
            tiltx: number,
            tilty: number,
            degree: number,
            backgroundTransformScale: number,
            foregroundTranslateZ: number
          }
        ) => (
          <div
            className='wrapper'
            ref={(wrapper: HTMLElement) => {
              this.$wrapper = wrapper
            }}
            role='presentation'
            style={{
              transform: `rotate3d(${style.tiltx}, ${style.tilty}, 0, ${style.degree}deg)`
            }}
          >
            <style jsx>{`
              .wrapper {
                height: 100%;
                transform-style: preserve-3d;
                width: 100%;
              }

              .background, .foreground {
                height: 100%;
                position: absolute;
                width: 100%;
              }

              .foreground {
                color: #fff;
              }
            `}</style>
            <div
              className='background'
              style={{
                transform: `scale(${style.backgroundTransformScale})`
              }}
            >
              <SvgLogo />
            </div>
            <div
              className='foreground'
              style={{
                transform: `translateZ(${style.foregroundTranslateZ}px)`
              }}
            >
              <SvgLogo />
            </div>
          </div>
        )}
      />
    )
  }
}
