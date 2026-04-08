import clsx from "clsx";
import svgPaths from "./svg-lnzh5yokfu";
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
      <div className="h-[62px] relative shrink-0 w-[120px]" data-name="Teknas logo trans">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute h-[52.498px] left-[10px] top-[5px] w-[99.116px]" data-name="Teknas Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.1165 52.4982">
              <g id="TeknasDarkLogo">
                <g id="Group">
                  <path d={svgPaths.p11d92d00} fill="var(--fill-0, black)" id="Vector" />
                  <path d={svgPaths.p2e925d00} fill="var(--fill-0, black)" id="Vector_2" />
                  <path d={svgPaths.p23bdb500} fill="var(--fill-0, black)" id="Vector_3" />
                  <path d={svgPaths.p2d5dbc00} fill="var(--fill-0, black)" id="Vector_4" />
                  <path d={svgPaths.p1428b5c0} fill="var(--fill-0, black)" id="Vector_5" />
                  <path d={svgPaths.p971ed00} fill="var(--fill-0, black)" id="Vector_6" />
                  <path d={svgPaths.p297fdd80} fill="var(--fill-0, black)" id="Vector_7" />
                  <path d={svgPaths.p3e099380} fill="var(--fill-0, black)" id="Vector_8" />
                </g>
                <path d={svgPaths.p19cd3500} fill="var(--fill-0, #F6851F)" id="Vector_9" />
                <path d={svgPaths.p12d89800} fill="var(--fill-0, black)" id="Vector_10" />
                <path d={svgPaths.p3599b380} fill="var(--fill-0, black)" id="Vector_11" />
                <path d={svgPaths.p2afba280} fill="var(--fill-0, black)" id="Vector_12" />
                <path d={svgPaths.p175c040} fill="var(--fill-0, black)" id="Vector_13" />
                <path d={svgPaths.pacbe200} fill="var(--fill-0, black)" id="Vector_14" />
                <path d={svgPaths.p3ac97400} fill="var(--fill-0, #ED1C24)" id="Vector_15" />
                <path d={svgPaths.p25107fe0} fill="var(--fill-0, black)" id="Vector_16" />
              </g>
            </svg>
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