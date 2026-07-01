import PageHero from '../components/PageHero.jsx';
import ImageBox from '../components/ImageBox.jsx';
import { site } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <PageHero eyebrow="ABOUT" title="펫스테이1455" subtitle="Private Pension · Private Poolvilla" image="/images/hero-02.jpg" />
      <section className="section two-col">
        <ImageBox src="/images/about-01.jpg" alt="펫스테이1455 소개" />
        <div>
          <span className="eyebrow">WELCOME</span>
          <h2>반려견과 가족 모두를 위한<br />프라이빗 스테이</h2>
          <p>펫스테이1455는 반려견과 함께 머무는 고객을 위해 독채형 객실, 개별 잔디마당, 바베큐 공간을 갖춘 경주의 애견 동반 풀빌라입니다.</p>
          <ul className="check-list">
            <li>대형견까지 가능한 여유로운 공간</li>
            <li>객실별 프라이빗 구조</li>
            <li>자연과 가까운 경주 여행 동선</li>
          </ul>
          <p className="info-line">문의: {site.phone}</p>
        </div>
      </section>
    </>
  );
}
