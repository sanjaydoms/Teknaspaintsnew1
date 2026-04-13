import imgContainer from "figma:asset/a7401482e81bbe57967f22f543eb4cabd8458bab.png";
import imgContainer1 from "figma:asset/0bcb93b7d4ef916cbb88afe26ede2b2f7235b4d1.png";
import imgContainer2 from "figma:asset/282e9a38bd13dade9a6f931acc9d27bc666f2037.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative size-full">
      <Wrapper>
        <div className="h-[429px] relative rounded-[44px] shadow-[22px_5px_18.4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full" src={imgContainer} />
        </div>
        <p className="font-['Jost:Medium',sans-serif] font-medium leading-[44px] relative shrink-0 text-[#601f0b] text-[32px] text-center w-full whitespace-pre-wrap">ECO TURP</p>
      </Wrapper>
      <Wrapper>
        <div className="h-[429px] relative shadow-[22px_5px_18.4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[300px]" data-name="Container">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
        </div>
        <p className="font-['Jost:Medium',sans-serif] font-medium leading-[44px] min-w-full relative shrink-0 text-[#601f0b] text-[32px] text-center uppercase w-[min-content] whitespace-pre-wrap">Eco Turp+</p>
      </Wrapper>
      <Wrapper>
        <div className="h-[429px] relative shadow-[22px_5px_18.4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[300px]" data-name="Container">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
        </div>
        <p className="font-['Jost:Medium',sans-serif] font-medium leading-[44px] min-w-full relative shrink-0 text-[#601f0b] text-[32px] text-center uppercase w-[min-content] whitespace-pre-wrap">Eco Turp Pro</p>
      </Wrapper>
    </div>
  );
}