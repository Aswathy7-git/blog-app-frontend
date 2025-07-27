import React from 'react'

const CreatePost = () => {
  return (
    <div>

        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                            <label htmlFor="" className="form-label">Post a meassage</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                            <button className="btn btn-success">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CreatePost