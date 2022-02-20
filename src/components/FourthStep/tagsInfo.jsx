import React, { Component, Fragment } from 'react'
import Image from 'next/image'
import Carousel from "@blueupcode/slick"
import { CarouselItem, Button } from '@blueupcode/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import { ButtonActivate, ContainerOther, TagCard } from './FourthStepUi'
import Link from 'next/link'
import done from 'static/assets/done.png'
import tag1 from 'static/assets/Tag1.png'
import tag2 from 'static/assets/Tag2.png'
import tag3 from 'static/assets/Tag3.png'
import styles from 'styles/ProcessStyles/Steps.module.scss'

function CarouselPrev2(props) {
    const { onClick } = props
    return (
      <Button
        className={`${styles.slickHeight1}`}
        variant="flat-primary"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={SolidIcon.faAngleLeft} />
      </Button>
    )
}
function CarouselNext2(props) {
    const { onClick } = props
    return (
      <Button
        className={`${styles.slickHeight2}`}
        variant="flat-primary"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={SolidIcon.faAngleRight} />
      </Button>
    )
}

export default function TagsInfo({NextStep}) {
  return (
    <div>
        <ContainerOther padding={true}>
            <Image src={done} height={100} width={100} alt="sucess" />
            <h1 className={styles.TitleStep4}>Congratulation, your account is now open</h1>
            <h1 className={styles.TitleStep4}>What’s Next?</h1>
            <ButtonActivate onClick={() => NextStep()}>
                Activate Existing tag
            </ButtonActivate>
            <p className={styles.UnderTitleStep4}>Don’t have a tag? <Link href="#">Buy Now</Link></p>
            <div className={styles.CarouselContainer}>
                <SyncCarousel />
            </div>
        </ContainerOther>
    </div>
  )
}
class SyncCarousel extends Component {
    state = {
      main: null,
      nav: null
    }
  
    componentDidMount() {

      this.setState({
        main: this.mainRef,
        nav: this.navRef
      })
    }
  
    render() {
      return (
        <Fragment>
          {/* BEGIN Carousel */}
          <Carousel
            slidesToShow={3}
            prevArrow={<CarouselPrev2 />}
            nextArrow={<CarouselNext2 />}
            className="mt-4"
          >
            <CarouselItem>
              {/* BEGIN TagCard */}
              <TagCard>
                <Image height={135} width={135} src={tag1} alt="TagCard Image" />
                <p>Gold Tag</p>
                <span>$22.00</span>
                <button>BUY NOW</button>
              </TagCard>
              {/* END TagCard */}
            </CarouselItem>
            <CarouselItem>
              {/* BEGIN TagCard */}
              <TagCard>
                <Image height={135} width={135} src={tag2} alt="TagCard Image" />
                <p>Gold Tag</p>
                <span>$22.00</span>
                <button>BUY NOW</button>
              </TagCard>
              {/* END TagCard */}
            </CarouselItem>
            <CarouselItem>
              {/* BEGIN TagCard */}
              <TagCard>
                <Image height={135} width={135} src={tag3} alt="TagCard Image" />
                <p>Gold Tag</p>
                <span>$22.00</span>
                <button>BUY NOW</button>
              </TagCard>
              {/* END TagCard */}
            </CarouselItem>
            <CarouselItem>
              {/* BEGIN TagCard */}
              <TagCard>
                <Image height={135} width={135} src={tag3} alt="TagCard Image" />
                <p>Gold Tag</p>
                <span>$22.00</span>
                <button>BUY NOW</button>
              </TagCard>
              {/* END TagCard */}
            </CarouselItem>
          </Carousel>
          {/* END Carousel */}
        </Fragment>
      )
    }
  }