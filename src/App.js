import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Coba from './pages/Coba';
import Login from './pages/Login';
import CategoryPage from './pages/CategoryPage';
import ArticleDetails from './pages/ArticleDetails';
import Follow from './component/Follow';
import Footer from './component/Footer';
import Comment from './pages/Comment';
import Home from './pages/Home';
import RelatedArticles from './component/RelatedArticles';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route exact path='/coba'>
						<Coba />
					</Route>
					<Route path='/category_page'>
						<CategoryPage />
					</Route>
					<Route path='/article_details'>
						<ArticleDetails />
					</Route>
					<Route path='/follow'>
						<Follow />
					</Route>
					<Route path='/comment'>
						<Comment />
					</Route>
					<Route path='/related_articles'>
						<RelatedArticles />
					</Route>
					<Route path='/footer'>
						<Footer />
					</Route>
				</Switch>
			</Router>
		);
	}
}
export default App;
