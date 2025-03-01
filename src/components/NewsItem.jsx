import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, urlToImage ,url}= this.props;
    return (
      <div className='my-3'>
        <div className="card h-100" style={{width: "18rem"}}>
          <img src={urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}</p>
              <a href={url} className="btn btn-sm btn-primary" target='_blank'>Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
