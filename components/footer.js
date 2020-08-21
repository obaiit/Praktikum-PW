const Footer = () => (     
<footer class="page-footer font-small pt-4 text-black bg-info mb-3" >
    <div class="container-fluid text-center text-md-left">
      <div class="row ">
        <div class="col-md-3 mt-md-0 mt-3">
          <h5 class="text-uppercase">INFORMASI BITE Shop</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#! " className="text-white">Tentang Kami</a>
              </li>
              <li>
                <a href="#!"className="text-white">Kebijakan Privasi</a>
              </li>
            </ul>
        </div>
        {/* <hr class="clearfix w-100 d-md-none pb-3"></hr> */}
        <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Customer Service</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!"className="text-white">Hubungi Kami</a>
              </li>
              <li>
                <a href="#!"className="text-white">FAQ</a>
              </li>
              <li>
                <a href="#!"className="text-white">Bagaimana Cara Mendaftar?</a>
              </li>
              <li>
                <a href="#!"className="text-white">Bagaimana Cara Beli?</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Metode Pembayaran</h5>
            <div class="row mx-md-n0">
            <div class="col px-md-1"><div class="p-3 border bg-light"><img src="/images/bca.jpg" width="60px;" height="60px;"/></div></div>
            <div class="col px-md-1"><div class="p-3 border bg-light"><img src="/images/visa.png" width="60px;" height="60px;"/></div></div>
            <div class="col px-md-1"><div class="p-3 border bg-light"><img src="/images/gopay.jpg" width="60px;" height="60px;"/></div></div>
          </div>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Pengiriman</h5>
            <div class="row mx-md-n0">
            <div class="col px-md-1"><div class="p-3 border bg-light"><img src="/images/JNE.jpg" width="60px;" height="60px;"/></div></div>
            <div class="col px-md-1"><div class="p-3 border bg-light"><img src="/images/jnt.jpg" width="60px;" height="60px;"/></div></div>
            </div>
          </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3 text-white bg-secondary mb-3">
      &copy; 2020 BITE Shop - KOREAN WAVE and KPOP
    </div>
  </footer>
)
export default Footer;