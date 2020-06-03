import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShopContainer } from './shop.styles';

import { fetchCollectionStart } from '../../redux/shop/shop.action';
// import CollectionOverviewContainer from '../../components/collecton-overview/collection-overview.container';
// import CollectionPageContainer from '../collection/collection.container';
const CollectionOverviewContainer = lazy(() =>
  import('../../components/collecton-overview/collection-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionStart();
  }
  render() {
    const { match } = this.props;
    return (
      <ShopContainer>
        <Suspense>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </ShopContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
