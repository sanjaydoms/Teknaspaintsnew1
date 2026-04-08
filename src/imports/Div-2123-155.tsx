import clsx from "clsx";
import svgPaths from "./svg-1mhougx70s";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[18px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[48px] items-center justify-center min-h-px min-w-px relative">
      <p className="font-['Fira_Sans:Regular',sans-serif] leading-[20.25px] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] tracking-[0.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Div() {
  return (
    <div className="bg-[rgba(255,255,255,0.81)] content-stretch flex items-center justify-between px-[72px] relative size-full" data-name="div">
      <div className="h-[52px] relative shrink-0 w-[82.172px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
          <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="svg">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute contents inset-0" data-name="TeknasDarkLogo">
                <div className="absolute contents inset-[86.95%_15%_5.84%_15.03%]" data-name="Group">
                  <div className="absolute inset-[89.85%_71.84%_8.73%_15.03%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7903 0.737618">
                      <path d={svgPaths.p2cf70a80} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[89.87%_14.99%_8.76%_71.76%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8828 0.714884">
                      <path d={svgPaths.p33817000} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[87.07%_45.72%_5.86%_49.57%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.86462 3.67547">
                      <path d={svgPaths.p27f9100} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[87.02%_31.46%_5.84%_63.99%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.73808 3.71535">
                      <path d={svgPaths.pe0e1980} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[87.13%_64.48%_6.03%_31.07%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.65206 3.56103">
                      <path d={svgPaths.p31befb00} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[86.95%_57.25%_5.86%_37.1%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6403 3.74096">
                      <path d={svgPaths.p3f3ac600} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[87.1%_38.38%_5.96%_57.03%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.7646 3.60548">
                      <path d={svgPaths.p19e1b980} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[87.13%_53.58%_5.97%_45.3%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.919952 3.5926">
                      <path d={svgPaths.p23eaa480} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[99.27%_20.34%_0_20.27%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8041 0.378472">
                    <path d={svgPaths.p1dc3e700} fill="var(--fill-0, #F6851F)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[50.42%_64.55%_21.84%_22.46%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6778 14.424">
                    <path d={svgPaths.p7fe5e00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[50.41%_49.54%_21.83%_37.25%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8591 14.4384">
                    <path d={svgPaths.p35f25770} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[50.38%_32.63%_21.83%_52.27%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4099 14.4501">
                    <path d={svgPaths.p2686c280} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[50.42%_14.52%_21.82%_69.07%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.482 14.4346">
                    <path d={svgPaths.p10668400} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[49.82%_0_21.29%_87.15%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5571 15.0233">
                    <path d={svgPaths.p30933900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_79.68%_51.99%_1.61%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3736 24.9644">
                    <path d={svgPaths.p4375500} fill="var(--fill-0, #ED1C24)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[49.81%_78.06%_17.56%_0]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0259 16.9656">
                    <path d={svgPaths.p3c035c70} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[44px] items-center relative">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[470px]" data-name="Container">
            <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-[18px]" data-name="Container">
              <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="a">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <Wrapper additionalClassNames="relative shrink-0">
                    <g id="Home">
                      <path d={svgPaths.pb56cd00} id="Vector" stroke="var(--stroke-0, #5C0404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
                      <path d={svgPaths.pdd08040} id="Vector_2" stroke="var(--stroke-0, #5C0404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
                    </g>
                  </Wrapper>
                </div>
              </div>
            </div>
            <ContainerText text="Colours" />
            <ContainerText text="Products" />
            <ContainerText text="Services" />
            <ContainerText text="about us" />
            <ContainerText text="Blogs" />
            <div className="absolute bg-[#d44e4e] h-[2.5px] left-0 rounded-[16777200px] top-[45.5px] w-[18px]" data-name="Container" />
          </div>
          <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-[255px]" data-name="Container">
            <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[16px] relative size-full">
                      <div className="h-[15px] relative shrink-0 w-[14.063px]" data-name="Search">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0625 15">
                          <g id="Search">
                            <path d={svgPaths.p29085e00} id="Vector" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.333" strokeWidth="1.17188" />
                            <path d={svgPaths.p114efc00} id="Vector_2" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.333" strokeWidth="1.17188" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex-[1_0_0] h-[19.5px] min-h-px min-w-px relative" data-name="input">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
                          <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(26,20,40,0.5)] whitespace-nowrap">Search for Interior paints</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(40,20,20,0.59)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[226px]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[140px]">
              <div className="content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[38px]" data-name="button">
                <Wrapper additionalClassNames="relative shrink-0">
                  <g id="MapPin">
                    <path d={svgPaths.p625a980} id="Vector" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p18c84c80} id="Vector_2" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </Wrapper>
              </div>
              <div className="content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[38px]" data-name="button">
                <Wrapper additionalClassNames="relative shrink-0">
                  <g id="User">
                    <path d={svgPaths.p14dca900} id="Vector" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p117fc1f0} id="Vector_2" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </Wrapper>
              </div>
              <div className="relative rounded-[16777200px] shrink-0 size-[38px]" data-name="button">
                <Wrapper additionalClassNames="absolute left-[10px] top-[10px]">
                  <g clipPath="url(#clip0_2116_247)" id="ShoppingCart">
                    <path d={svgPaths.p61f9880} id="Vector" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p266da370} id="Vector_2" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p12d64e80} id="Vector_3" stroke="var(--stroke-0, #1A1428)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2116_247">
                      <rect fill="white" height="18" width="18" />
                    </clipPath>
                  </defs>
                </Wrapper>
                <div className="absolute bg-[#d4a24e] content-stretch flex items-center justify-center left-[23px] rounded-[16777200px] size-[17px] top-[-2px]" data-name="span">
                  <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[9px] relative shrink-0 text-[9px] text-center text-white whitespace-nowrap">0</p>
                </div>
              </div>
            </div>
            <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#bd595d] text-[12px] text-center tracking-[0.5px] whitespace-nowrap">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
}