import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import './index.css'
import {
  TrendingItemList,
  TrendingItemImage,
  TrendingItemHeading1,
  TrendingItemContainer,
  TrendingItemP1,
  Row,
} from './styledComponents'

const TrendingItem = props => (
  <CartContext.Consumer>
    {value => {
      const {itemDetails} = props
      const {
        thumbnailUrl,
        id,
        title,
        viewCount,
        channel,
        publishedAt,
      } = itemDetails
      const {isLightTheme} = value
      const text = !isLightTheme && '#ffffff'
      const publish = formatDistanceToNow(new Date(publishedAt))
      return (
        <>
          <Link className="link" to={`/videos/${id}`}>
            <TrendingItemList key={id}>
              <TrendingItemImage alt="video thumbnail" src={thumbnailUrl} />
              <TrendingItemContainer>
                <TrendingItemHeading1 style={{color: text}}>
                  {title}
                </TrendingItemHeading1>
                <TrendingItemP1>{channel.name}</TrendingItemP1>
                <Row>
                  <TrendingItemP1>{viewCount} views .</TrendingItemP1>
                  <TrendingItemP1>{publish} ago </TrendingItemP1>
                </Row>
              </TrendingItemContainer>
            </TrendingItemList>
          </Link>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default TrendingItem
