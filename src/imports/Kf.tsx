import clsx from "clsx";
import svgPaths from "./svg-2k99qn9glx";
import imgImageLivingRoom from "figma:asset/3fac75406832d73ad1393d180e44abc1c07ecca2.png";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return <BackgroundImage2 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</BackgroundImage2>;
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return <BackgroundImage2 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage2>;
}

export default function Kf() {
  return (
    <div className="bg-[#fffefc] relative size-full" data-name="Kf">
      <div className="absolute h-[832px] left-0 overflow-clip top-0 w-[1440px]" data-name="svg">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 832">
          <g id="Pattern" opacity="0.1">
            <path d={svgPaths.p13632200} fill="url(#paint0_linear_2150_102)" id="Vector" />
            <path d={svgPaths.pc767000} fill="url(#paint1_linear_2150_102)" id="Vector_2" />
            <path d={svgPaths.p528ed80} fill="url(#paint2_linear_2150_102)" id="Vector_3" />
            <path d={svgPaths.pd647000} fill="url(#paint3_linear_2150_102)" id="Vector_4" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2150_102" x1="0" x2="720" y1="208.003" y2="208.003">
              <stop stopColor="#B68230" />
              <stop offset="0.5" stopColor="#DEC877" />
              <stop offset="1" stopColor="#B68230" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2150_102" x1="0" x2="720" y1="623.994" y2="623.994">
              <stop stopColor="#B68230" />
              <stop offset="0.5" stopColor="#DEC877" />
              <stop offset="1" stopColor="#B68230" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2150_102" x1="720" x2="1440" y1="208.003" y2="208.003">
              <stop stopColor="#B68230" />
              <stop offset="0.5" stopColor="#DEC877" />
              <stop offset="1" stopColor="#B68230" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2150_102" x1="720" x2="1440" y1="623.994" y2="623.994">
              <stop stopColor="#B68230" />
              <stop offset="0.5" stopColor="#DEC877" />
              <stop offset="1" stopColor="#B68230" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[56px] items-start justify-center left-[112px] top-[60px] w-[1216px]">
        <div className="content-stretch flex h-[95.594px] items-end justify-between relative shrink-0 w-full" data-name="Container">
          <div className="h-[95.594px] relative shrink-0 w-[612.445px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start justify-center relative size-full">
              <div className="content-stretch flex gap-[14px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#c75b3a] h-[2px] shrink-0 w-[48px]" data-name="Container" />
                <div className="h-[18px] relative shrink-0 w-[219.336px]" data-name="span">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                    <p className="font-['Fira_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c75b3a] text-[12px] tracking-[5px] uppercase whitespace-nowrap">Colour Trends 2026</p>
                  </div>
                </div>
              </div>
              <div className="h-[61.594px] relative shrink-0 w-full" data-name="h2">
                <p className="absolute font-['Jost:SemiBold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#1a1428] text-[56px] top-0 whitespace-nowrap">
                  <span className="font-['Fira_Sans:Regular',sans-serif] leading-[61.6px]">Find Your Perfect</span>
                  <span className="font-['Fira_Sans:SemiBold',sans-serif] leading-[61.6px]">{` `}</span>
                  <span className="font-['Fira_Sans:SemiBold',sans-serif] leading-[61.6px] text-[#c75b3a]">Shade</span>
                </p>
              </div>
            </div>
          </div>
          <BackgroundImage additionalClassNames="h-[19.5px] w-[234.313px]">
            <p className="-translate-x-1/2 absolute font-['Fira_Sans:SemiBold',sans-serif] leading-[19.5px] left-[102px] not-italic text-[#c75b3a] text-[13px] text-center top-0 tracking-[3px] uppercase whitespace-nowrap">{`Explore All Colours `}</p>
            <div className="absolute left-[216.31px] size-[18px] top-[0.75px]" data-name="ArrowRight">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g id="ArrowRight">
                  <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, #C75B3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, #C75B3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </BackgroundImage>
        </div>
        <div className="h-[560px] overflow-clip relative rounded-tr-[24px] shrink-0 w-full" data-name="Kf">
          <div className="absolute h-[560px] left-0 top-0 w-[1216px]" data-name="Container">
            <div className="absolute h-[560px] left-0 top-0 w-[1216px]" data-name="Image (Living Room)">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLivingRoom} />
            </div>
            <div className="absolute h-[560px] left-0 top-0 w-[1216px]" data-name="Container" style={{ backgroundImage: "linear-gradient(155.273deg, rgba(117, 134, 108, 0.25) 0%, rgba(0, 0, 0, 0) 60%)" }} />
          </div>
          <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.55)] h-[560px] left-0 to-[rgba(0,0,0,0)] top-0 via-[55%] via-[rgba(0,0,0,0.15)] w-[1216px]" data-name="Container" />
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[560px] left-0 to-[40%] to-[rgba(0,0,0,0)] top-0 w-[1216px]" data-name="Container" />
          <div className="absolute content-stretch flex h-[560px] items-start left-0 top-0 w-[1216px]" data-name="Container">
            <div className="h-[560px] relative shrink-0 w-[898px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pl-[64px] relative size-full">
                <BackgroundImage additionalClassNames="h-[229.594px] w-[764px]">
                  <div className="absolute h-[16.5px] left-0 top-0 w-[764px]" data-name="Kf">
                    <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[11px] text-[rgba(255,255,255,0.45)] top-[-0.5px] tracking-[4px] uppercase whitespace-nowrap">Colour of the Year · Living Room</p>
                  </div>
                  <div className="absolute h-[65.094px] left-0 top-[24.5px] w-[764px]" data-name="Kf">
                    <p className="absolute font-['Fira_Sans:SemiBold',sans-serif] leading-[65.1px] left-0 not-italic text-[62px] text-white top-0 whitespace-nowrap">Sage Serenity</p>
                  </div>
                  <div className="absolute h-[56px] left-0 top-[105.59px] w-[440px]" data-name="Kf">
                    <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[28px] left-0 not-italic text-[17px] text-[rgba(255,255,255,0.6)] top-[-0.5px] w-[412px]">A muted sage that brings calm and organic warmth to any room.</p>
                  </div>
                  <div className="absolute h-[44px] left-0 top-[185.59px] w-[764px]" data-name="Kf">
                    <div className="absolute bg-[rgba(255,255,255,0.08)] content-stretch flex gap-[12px] h-[44px] items-center left-0 px-[21px] py-px rounded-[16777200px] top-0 w-[128.422px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
                      <div className="bg-[#75866c] relative rounded-[16777200px] shadow-[0px_0px_0px_0px_rgba(255,255,255,0.25)] shrink-0 size-[22px]" data-name="Container">
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
                      </div>
                      <BackgroundImage1 additionalClassNames="h-[21px]">
                        <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-0 whitespace-nowrap">#75866C</p>
                      </BackgroundImage1>
                    </div>
                    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] h-[41.5px] items-center left-[144.42px] px-[21px] py-px rounded-[16777200px] top-[1.25px] w-[119.031px]" data-name="Button">
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
                      <div className="relative shrink-0 size-[15px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                          <g id="Icon">
                            <path d={svgPaths.p199e4700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.25" />
                            <path d={svgPaths.p66e3e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.25" />
                          </g>
                        </svg>
                      </div>
                      <BackgroundImage1 additionalClassNames="h-[19.5px]">
                        <p className="-translate-x-1/2 absolute font-['Fira_Sans:Medium',sans-serif] leading-[19.5px] left-[26.5px] not-italic text-[13px] text-[rgba(255,255,255,0.75)] text-center top-0 whitespace-nowrap">Visualize</p>
                      </BackgroundImage1>
                    </div>
                  </div>
                </BackgroundImage>
              </div>
            </div>
            <BackgroundImage additionalClassNames="h-[560px] w-[324px]">
              <div className="absolute flex h-[249.092px] items-center justify-center left-[57.84px] top-[251.45px] w-[192.314px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-3">
                  <div className="h-[240px] relative shadow-[0px_30px_100px_0px_rgba(0,0,0,0.35)] w-[180px]" data-name="Container">
                    <div className="absolute bg-[rgba(0,0,0,0.1)] left-[83px] rounded-[16777200px] size-[14.714px] top-[16px]" data-name="Kf">
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[258.815px] items-center justify-center left-[64px] top-[127px] w-[205.087px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
                <div className="flex-none rotate-3">
                  <div className="bg-white h-[249.092px] overflow-clip relative rounded-[18px] w-[192.314px]" data-name="Kf">
                    <div className="absolute bg-[#75866c] h-[167.204px] left-0 top-0 w-[193.719px]" data-name="Container" />
                    <div className="absolute h-[91.308px] left-[-8.27px] top-[157.78px] w-[184.045px]" data-name="Container">
                      <div className="absolute h-[24.223px] left-[15.36px] top-[12.57px] w-[148.661px]" data-name="Paragraph">
                        <p className="absolute font-['Fira_Sans:Medium',sans-serif] leading-[16.5px] left-[-0.8px] not-italic text-[11px] text-[rgba(26,20,40,0.25)] top-[-0.25px] tracking-[2px] uppercase whitespace-nowrap">Teknas</p>
                      </div>
                      <div className="absolute h-[28.717px] left-[14.38px] top-[31.3px] w-[148.896px]" data-name="Paragraph">
                        <p className="absolute font-['Fira_Sans:SemiBold',sans-serif] leading-[21px] left-[-0.97px] not-italic text-[#1a1428] text-[14px] top-0 whitespace-nowrap">Sage Serenity</p>
                      </div>
                      <div className="absolute h-[24.223px] left-[13.19px] top-[54.01px] w-[148.661px]" data-name="Paragraph">
                        <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[16.5px] left-[-0.8px] not-italic text-[11px] text-[rgba(26,20,40,0.27)] top-[-0.25px] whitespace-nowrap">#75866C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </div>
          <div className="absolute h-[88px] left-0 top-[472px] w-[1216px]" data-name="Container">
            <div className="absolute bg-[#75866c] h-[88px] left-0 top-0 w-[202.664px]" data-name="Button">
              <div className="absolute bg-white h-[3px] left-0 top-0 w-[202.664px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col gap-[2px] h-[88px] items-center justify-center left-0 top-0 w-[202.664px]" data-name="Container">
                <BackgroundImage additionalClassNames="h-[18px] w-[108.359px]">
                  <p className="-translate-x-1/2 absolute font-['Fira_Sans:SemiBold',sans-serif] leading-[18px] left-[54.5px] not-italic text-[12px] text-[rgba(255,255,255,0.85)] text-center top-0 tracking-[2px] uppercase whitespace-nowrap">Sage Serenity</p>
                </BackgroundImage>
                <BackgroundImage additionalClassNames="h-[15px] w-[36.297px]">
                  <p className="-translate-x-1/2 absolute font-['Fira_Sans:Regular',sans-serif] leading-[15px] left-[18.5px] not-italic text-[10px] text-[rgba(255,255,255,0.4)] text-center top-[-0.5px] whitespace-nowrap">#75866C</p>
                </BackgroundImage>
              </div>
            </div>
            <div className="absolute bg-[#c75b3a] h-[56px] left-[202.66px] top-0 w-[202.664px]" data-name="Button" />
            <div className="absolute bg-[#d4a24e] h-[56px] left-[405.33px] top-0 w-[202.664px]" data-name="Button" />
            <div className="absolute bg-[#3b7ca5] h-[56px] left-[607.99px] top-0 w-[202.664px]" data-name="Button" />
            <div className="absolute bg-[#1a1428] h-[56px] left-[810.66px] top-0 w-[202.664px]" data-name="Button" />
            <div className="absolute bg-[#ede7dd] h-[56px] left-[1013.32px] top-0 w-[202.664px]" data-name="Button" />
          </div>
        </div>
      </div>
    </div>
  );
}