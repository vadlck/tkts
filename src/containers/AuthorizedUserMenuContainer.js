import { connect } from 'react-redux';
import AuthorizedUserMenu from '../components/AuthorizedUserMenu/AuthorizedUserMenu';
import { getAuthorizedUser } from '../store/authorizedUser/selectors';
import { unauthorize } from '../store/authorizedUser/actions';

const mapStateToProps = state => ({
	authorizedUser: getAuthorizedUser(state)
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(unauthorize())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedUserMenu);