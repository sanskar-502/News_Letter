import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    // Initializing state with an empty array for articles
    this.state = {
      articles: [], // Ensure articles is an empty array initially
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ba000d6caf014eedbd7f74919cc76653&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles, totalResult:parsedData.totalResult })
  }

  handlePreviousClick = async () => {
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ba000d6caf014eedbd7f74919cc76653&page=${this.state.page-1}&pageSize=${this.props.pageSize}` ;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page:this.state.page -1 ,
       articles: parsedData.articles })
  }

  handleNextClick = async()=>{
    console.log("Next")
    if (this.state.page +1 > Math.ceil(this.state.totalResult/this.props.pageSize)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ba000d6caf014eedbd7f74919cc76653&page=${this.state.page+1}&pageSize=${this.props.pageSize}` ;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page:this.state.page +1 ,
         articles: parsedData.articles })
    }
   
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} urlToImage={element.urlToImage?element.urlToImage:"https://pagesix.com/wp-content/uploads/sites/3/2024/09/89530633.jpg?quality=75&strip=all&w=1024"} url={element.url} />
            </div>
          })}
        </div>
          <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}


export default News
