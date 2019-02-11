import React from "react";
import { setSearchField, requestRobots } from "../actions.js";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundary.js";

class App extends React.Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const filteredRobots = this.props.robots.filter(robot => {
			return robot.name
				.toLowerCase()
				.includes(this.props.searchField.toLowerCase());
		});
		if (!this.props.robots.length) {
			return <h1>Loading...</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.props.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
