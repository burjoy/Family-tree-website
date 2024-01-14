import '../custom_style/style.css'

function Card(){
    return(
        <>
        {/* <!-- Family Tree --> */}
        <div className="family-tree">
          {/* <!-- Grandparents --> */}
          <div className="flex items-center mb-4">
            <div className="w-1/2 family-member">
              <p>Grandfather</p>
            </div>
            <div className="w-1/2 family-member">
              <p>Grandmother</p>
            </div>
          </div>
    
          {/* <!-- Parents --> */}
          <div className="flex items-center mb-4">
            <div className="w-1/2 family-member">
              <p>Father</p>
            </div>
            <div className="w-1/2 family-member">
              <p>Mother</p>
            </div>
          </div>
    
          {/* <!-- Children --> */}
          <div className="flex items-center">
            <div className="w-1/4 family-member">
              <p>Child 1</p>
            </div>
            <div className="w-1/4 family-member">
              <p>Child 2</p>
            </div>
            <div className="w-1/4 family-member">
              <p>Child 3</p>
            </div>
            <div className="w-1/4 family-member">
              <p>Child 4</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Card