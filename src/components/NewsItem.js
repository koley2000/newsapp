import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, publishedTime } = this.props;
    return (
      <div className='my-3'>
        <div className="card mb-3" style={{ width: "62rem" }}>
          <div className='row g-0'>
            <div className='col-md-3'>
              <img src={imageUrl ? imageUrl : "https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"} className="card-img-top" alt="..." style={{ height: "16rem" }} />
            </div>
            <div className='col-md-8'>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">{new Date(publishedTime).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
