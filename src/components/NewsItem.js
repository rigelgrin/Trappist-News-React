import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      
        <div className="p-4 md:w-1/3">
          
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          
            <img
              loading='lazy'
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={imgUrl}
              alt="blog"
            />
            <span className="bg-indigo-100 mt-1/6 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">{source}</span>
            <div className="p-6">

              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {title}
              </h1>
              <p className="leading-relaxed mb-3">
                {description}...
              </p>
              <h3 className="tracking-widest my-1 text-grey-500 text-xs font-medium title-font">{author}</h3>
              <h3 className="tracking-widest my-1 text-blue-500 text-xs font-bold title-font">{new Date(date).toUTCString()}</h3>
              <div className="flex items-center flex-wrap ">
                <a href={newsUrl} rel="noreferrer" target="_blank" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default NewsItem