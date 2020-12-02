import React from 'react'
import { connect } from 'react-redux'
import './collections-overview.styles.scss'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../preview-collection/collection-preview.component'
import { selectCollectionFoPreview } from '../../redux/shop/shop.selectors'
const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionFoPreview
    }
)

export default connect(mapStateToProps)(CollectionsOverview)