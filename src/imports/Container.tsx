import clsx from "clsx";
import svgPaths from "./svg-dwadcli01s";
import imgContainer from "figma:asset/0782cf6d2e471283b31a4890c291dd82863dc492.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("relative w-[414.25px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type SpanBackgroundImageProps = {
  additionalClassNames?: string;
};

function SpanBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<SpanBackgroundImageProps>) {
  return (
    <div className={clsx("bg-[rgba(117,134,108,0.07)] relative rounded-[16777200px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-[12px] size-[12px] top-[8.25px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="Check">
              <path d="M10 3L4.5 8.5L2 6" id="Vector" stroke="var(--stroke-0, #75866C)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
        <p className="absolute font-['Fira_Sans:SemiBold',sans-serif] leading-[16.5px] left-[30px] not-italic text-[#75866c] text-[11px] top-[6px] tracking-[1px] uppercase whitespace-nowrap">{children}</p>
      </div>
    </div>
  );
}
type SpanBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText2({ text, additionalClassNames = "" }: SpanBackgroundImageAndText2Props) {
  return (
    <div className={clsx("h-[16.5px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(26,20,40,0.25)] tracking-[1px] uppercase whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ additionalClassNames = "" }: ContainerBackgroundImageProps) {
  return (
    <div className={clsx("bg-[#75866c] relative rounded-[5px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}
type SpanBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText1({ text, additionalClassNames = "" }: SpanBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[19.5px] items-start", additionalClassNames)}>
      <p className="font-['Fira_Sans:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[rgba(26,20,40,0.25)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
      <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1428] text-[14px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type SpanBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanBackgroundImageAndText({ text, additionalClassNames = "" }: SpanBackgroundImageAndTextProps) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <BackgroundImageAndText text={text} />
    </div>
  );
}

function StarBackgroundImage() {
  return (
    <BackgroundImage1>
      <g id="Star">
        <path d={svgPaths.p6932200} fill="var(--fill-0, #D4A24E)" id="Vector" stroke="var(--stroke-0, #D4A24E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      </g>
    </BackgroundImage1>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[28px] shadow-[0px_30px_80px_0px_rgba(75,86,69,0.08)] size-full" data-name="Container">
      <div className="h-[493.094px] relative shrink-0 w-full" data-name="Container">
        <div className="absolute content-stretch flex flex-col gap-[28px] h-[493.094px] items-start left-0 pl-[40px] py-[40px] top-0 w-[494.25px]" data-name="Container">
          <div className="h-[28.5px] relative shrink-0 w-[414.25px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
              <SpanBackgroundImage additionalClassNames="h-[28px] w-[114px]">{` Zero VOC`}</SpanBackgroundImage>
              <SpanBackgroundImage additionalClassNames="h-[28.5px] w-[134.859px]">{` Eco Certified`}</SpanBackgroundImage>
            </div>
          </div>
          <BackgroundImage additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
            <div className="absolute h-[261.094px] left-[222px] top-0 w-[192.25px]" data-name="Container">
              <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[8px] w-[192.25px]" data-name="p">
                <p className="flex-[1_0_0] font-['Fira_Sans:Medium',sans-serif] leading-[16.5px] min-h-px min-w-px not-italic relative text-[#75866c] text-[11px] tracking-[3px] uppercase">Teknas Paints</p>
              </div>
              <div className="absolute h-[73.594px] left-0 top-[32.5px] w-[192.25px]" data-name="h4">
                <p className="absolute font-['Fira_Sans:Bold',sans-serif] leading-[36.8px] left-0 not-italic text-[#1a1428] text-[32px] top-[-1px] w-[131px]">Eco Turp Premium</p>
              </div>
              <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[110.09px] w-[192.25px]" data-name="p">
                <p className="flex-[1_0_0] font-['Fira_Sans:Regular',sans-serif] leading-[21px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(26,20,40,0.31)]">Ultra-low VOC Turpentine</p>
              </div>
              <div className="absolute content-stretch flex gap-[8px] h-[39px] items-center left-0 top-[151.09px] w-[192.25px]" data-name="Container">
                <div className="flex-[1_0_0] h-[14px] min-h-px min-w-px relative" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-start relative size-full">
                    <StarBackgroundImage />
                    <StarBackgroundImage />
                    <StarBackgroundImage />
                    <StarBackgroundImage />
                    <div className="flex-[1_0_0] h-[14px] min-h-px min-w-px relative" data-name="Star">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
                          <div className="absolute inset-[-5.24%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8344 12.292">
                              <path d={svgPaths.p25c68640} id="Vector" stroke="var(--stroke-0, #D4A24E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[21px] relative shrink-0 w-[22.656px]" data-name="span">
                  <BackgroundImageAndText text="4.9" />
                </div>
                <div className="h-[39px] relative shrink-0 w-[75.594px]" data-name="span">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Fira_Sans:Regular',sans-serif] leading-[19.5px] left-[0.34px] not-italic text-[13px] text-[rgba(26,20,40,0.25)] top-[-0.28px] w-[60px]">(1,240 reviews)</p>
                  </div>
                </div>
              </div>
              <div className="absolute h-[51px] left-0 top-[210.09px] w-[192.25px]" data-name="Container">
                <SpanBackgroundImageAndText1 text="From" additionalClassNames="left-0 top-[23px] w-[27.742px]" />
                <div className="absolute h-[51px] left-[36px] top-[-0.28px] w-[108px]" data-name="span">
                  <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[51px] left-0 not-italic text-[#1a1428] text-[34px] top-[-0.5px] whitespace-nowrap">₹2,499</p>
                </div>
                <SpanBackgroundImageAndText1 text="/litre" additionalClassNames="left-[144px] top-[22.72px] w-[27.148px]" />
              </div>
            </div>
            <div className="absolute h-[260px] left-0 top-0 w-[190px]" data-name="Container">
              <div className="absolute flex h-[259.842px] items-center justify-center left-[0.66px] top-[1.08px] w-[190.17px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "76" } as React.CSSProperties}>
                <div className="flex-none skew-x-[-0.14deg]">
                  <div className="border-2 border-[rgba(117,134,108,0.14)] border-solid h-[259.842px] overflow-clip relative rounded-[16px] shadow-[12px_16px_40px_0px_rgba(117,134,108,0.13)] w-[189.537px]" data-name="Container" style={{ backgroundImage: "linear-gradient(136.171deg, rgba(117, 134, 108, 0.094) 6.1733%, rgba(117, 134, 108, 0.03) 93.827%)" }}>
                    <div className="absolute bg-[#75866c] h-[11.732px] left-[0.24px] top-[-4.27px] w-[184.26px]" data-name="Container" />
                    <div className="absolute h-[126.102px] left-[0.1px] top-[3.63px] w-[185.598px]" data-name="Container">
                      <div className="absolute bg-[#75866c] content-stretch flex h-[39.975px] items-center justify-center left-[71.94px] pr-[0.037px] rounded-[16777200px] top-[20.73px] w-[39.809px]" data-name="Container">
                        <div className="relative shrink-0 size-[18px]" data-name="Droplets">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g id="Droplets">
                              <path d={svgPaths.p1912e080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p1bddbf80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex h-[13.703px] items-start left-[65.38px] top-[70.18px] w-[52.646px]" data-name="p">
                        <p className="flex-[1_0_0] font-['Jost:SemiBold',sans-serif] font-semibold leading-[13.5px] min-h-px min-w-px relative text-[#75866c] text-[9px] text-center tracking-[3px] uppercase">Teknas</p>
                      </div>
                      <div className="absolute h-[19.532px] left-[24.87px] top-[87.88px] w-[134.498px]" data-name="p">
                        <p className="-translate-x-1/2 absolute font-['Jost:Bold',sans-serif] font-bold leading-[19.2px] left-[67.55px] text-[#1a1428] text-[16px] text-center top-[-0.28px] whitespace-nowrap">Eco Turp Premium</p>
                      </div>
                      <div className="absolute content-stretch flex h-[15.076px] items-start left-[38.59px] top-[110.97px] w-[106.705px]" data-name="p">
                        <p className="font-['Jost:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(26,20,40,0.31)] text-center whitespace-nowrap">Ultra-low VOC Turpentine</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex h-[67.784px] items-end left-[-1.61px] pb-[0.154px] top-[190.96px] w-[189.018px]" data-name="Container">
                      <div className="bg-[#75866c] h-[53.726px] opacity-85 relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[189.27px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.878px] items-center justify-center pr-[0.789px] relative size-full">
                          <ContainerBackgroundImage additionalClassNames="h-[24.429px] opacity-60 w-[23.953px]" />
                          <ContainerBackgroundImage additionalClassNames="h-[24.516px] opacity-75 w-[24.079px]" />
                          <ContainerBackgroundImage additionalClassNames="h-[24.604px] opacity-90 w-[24.206px]" />
                          <ContainerBackgroundImage additionalClassNames="h-[24.692px] w-[24.356px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[163px] items-center justify-center left-[-0.03px] top-[14.81px] w-[189.627px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none skew-x-[-0.14deg]">
                  <div className="h-[163px] rounded-[16px] w-[189.23px]" data-name="Container" style={{ backgroundImage: "linear-gradient(123.832deg, rgba(255, 255, 255, 0.12) 7.735%, rgba(0, 0, 0, 0) 58.453%)" }} />
                </div>
              </div>
            </div>
          </BackgroundImage>
          <BackgroundImage additionalClassNames="h-[67.5px] shrink-0">
            <div className="absolute bg-[rgba(117,134,108,0.04)] content-stretch flex flex-col gap-[4px] h-[67.5px] items-center left-0 px-px py-[13px] rounded-[14px] top-0 w-[108.305px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[rgba(117,134,108,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <SpanBackgroundImageAndText2 text="Coverage" additionalClassNames="w-[64.875px]" />
              <SpanBackgroundImageAndText text="400 sq.ft/L" additionalClassNames="w-[74.305px]" />
            </div>
            <div className="absolute bg-[rgba(117,134,108,0.04)] content-stretch flex flex-col gap-[4px] h-[67.5px] items-center left-[120.3px] px-px py-[13px] rounded-[14px] top-0 w-[96.914px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[rgba(117,134,108,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <SpanBackgroundImageAndText2 text="Finish" additionalClassNames="w-[39.313px]" />
              <SpanBackgroundImageAndText text="Matte Silk" additionalClassNames="w-[62.914px]" />
            </div>
            <div className="absolute bg-[rgba(117,134,108,0.04)] content-stretch flex flex-col gap-[4px] h-[67.5px] items-center left-[229.22px] px-px py-[13px] rounded-[14px] top-0 w-[87.883px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[rgba(117,134,108,0.08)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <SpanBackgroundImageAndText2 text="Dry Time" additionalClassNames="w-[53.883px]" />
              <SpanBackgroundImageAndText text="2 hours" additionalClassNames="w-[48.289px]" />
            </div>
          </BackgroundImage>
        </div>
        <div className="absolute h-[495px] left-[494px] top-[-1.69px] w-[345px]" data-name="Container">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
        </div>
        <div className="absolute h-[79.5px] left-[526.25px] top-[381.59px] w-[296px]" data-name="Container">
          <div className="absolute content-stretch flex gap-[8px] h-[16.5px] items-center left-0 top-0 w-[296px]" data-name="Container">
            <BackgroundImage1>
              <g id="Eye">
                <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.16667" />
                <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.16667" />
              </g>
            </BackgroundImage1>
            <div className="h-[16.5px] relative shrink-0 w-[115.086px]" data-name="span">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                <p className="font-['Fira_Sans:Medium',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[11px] text-[rgba(255,255,255,0.7)] tracking-[2px] uppercase whitespace-nowrap">Result Preview</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[33px] left-0 top-[24.5px] w-[296px]" data-name="p">
            <p className="absolute font-['Fira_Sans:SemiBold',sans-serif] leading-[33px] left-0 not-italic text-[22px] text-white top-[0.5px] whitespace-nowrap">Living Room</p>
          </div>
          <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[61.5px] w-[296px]" data-name="p">
            <p className="flex-[1_0_0] font-['Fira_Sans:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(255,255,255,0.6)]">Painted with Eco Turp Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}