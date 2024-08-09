import Image from 'next/image';
import './_home.scss';
import Link from 'next/link';

function MainPage() {
  return (
    <main className="MainPage">
      <div className="main_service">
        <div className="main_slide">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/image/mainslide1.svg"
            alt="img"
            priority
          />
        </div>
        <div className="main_items n1">
          <Link href="/freetest">
            <div className="item free_item">
              <div className="free_item_des des">
                <h1>우리 톡방 분석 서비스</h1>
                <p>AI가 우리 톡방 내용을 읽고 샤라웃투</p>
                <button>100</button>
              </div>
              <div className="free_items_img"></div>
            </div>
          </Link>
        </div>
        <div className="main_items n2">
          <Link href="/">
            <div className="item pay_item">
              <div className="pay_item_des des">
                <h1>우리 톡방 분석 서비스</h1>
                <p>AI가 우리 톡방 내용을 읽고 샤라웃투</p>
                <button>200</button>
              </div>
              <div className="free_items_img"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
