<header className="header">
<Header />
</header>
<div className="main">
  {/* clinte list  */}
<div className="clist">
  <div className="clist__search">
    <span class="clist__searchIcon">
      {' '}
      <i class="fas fa-search"></i>
    </span>
    <input class="clist__searchInput" type="search" placeholder="Search" value=""></input>
  </div>

  <div className="clist__contacts">
    <div className=".clist__contact.active">
      <div class="clist__icon">
        <img src="/profiles/male-1.jpg" alt=""></img>
      </div>
      <div class="clist__name">
        <Result />
        <span class="clist__firstName">Ron</span>
        <span class="clist__lastName">Brookes</span>
      </div>
    </div>
    <div class="clist__contact">
      <div class="clist__icon">
        <img src="/profiles/male-2.jpg" alt=""></img>
      </div>
      <div class="clist__name">
        <span class="clist__firstName">Dodi</span>
        <span class="clist__lastName">Reason</span>
      </div>
    </div>
  </div>
  </div>
  
  {/* Result body part */}
<div className="details">
  <div class="details__large">
    <div class="details__icon">
      <img src="/profiles/male-1.jpg" alt=""></img>
    </div>
    <div class="details__name">
      <span class="details__firstName">Ron</span>
      <span class="details__lastName">Brookes</span>
    </div>
  </div>
  <div class="details__info">
    <div class="details__row">
      <label class="details__label">Mobile</label>
      <span class="details__text">(530) 4689217</span>
    </div>
    <div class="details__row">
      <label class="details__label">Telephone</label>
      <span class="details__text">(301) 8210933</span>
    </div>
    <div class="details__row">
      <label class="details__label">Email</label>
      <span class="details__text">rbrookes0@timesonline.co.uk</span>
    </div>
    <div class="details__row">
      <label class="details__label">Home Address</label>
      <span class="details__text">38816 Weeping Birch Park</span>
    </div>
  </div>
</div>
</div>