import MyHead from "@/components/MyHead";
import Link from "next/link";
import React from "react";

function Docs() {
  return(
   <>
        <MyHead
        title="Code by Lương Khoa"
        description="Welcome to website!"
        image="https://luongkhoa.io.vn/logo.png"
        url="https://check-rewind.vercel.app/"
      />
        <main className="mt-[65px] w-full">
        <div className="mockup-code min-h-screen rounded-none">
        <pre data-prefix="$" className="text-warning"><code>Tài liệu tham khảo...</code></pre> 
        <pre data-prefix=">" className="text-success"><code>----------------</code></pre> 
          <pre data-prefix="1">
            <code>- xem điểm Rewind 1 lần:</code>
            <code>  https://bit.ly/Fishy_Rewind_Sheet</code>
          </pre>
          <pre data-prefix=">" className="text-success"><code>----------------</code></pre> 
          <pre data-prefix="2">
            <code>- xem điểm Rewind ấn 1,2,3 lần:</code>
            <code>  https://bit.ly/Dodo_Rewind_Sheet </code>
          </pre>
          <pre data-prefix=">" className="text-success"><code>----------------</code></pre> 
          <pre data-prefix="3">
            <code>- bảng tính Dam to push day:</code>
            <code>  https://docs.google.com/spreadsheets/d/1-vl0Kwa9R1Bl36WHjihjItFfNVKi8LGRSEkqHy9tLuA/edit?usp=sharing </code>
          </pre>
          <pre data-prefix=">" className="text-success"><code>----------------</code></pre> 
          <pre data-prefix="4">
            <code>- bảng tính vé / rw:</code>
            <code>  https://docs.google.com/spreadsheets/d/1PXkEQIUGYAmSkZvI6fTCGSAeIUiUqUhp-zGoCbOsGG8/edit?usp=sharing </code>
          </pre>
          <pre data-prefix=">" className="text-success"><code>----------------</code></pre> 
          <pre data-prefix="5">
            <code>- bảng tính dầu:</code>
            <code>  https://docs.google.com/spreadsheets/d/1m-I5aN-Jx3dgDRTM7ADVn2JWc3VfV7NDKvLFLgdqQJM/edit?usp=sharing  </code>
          </pre>
          <pre data-prefix=">" className="text-success"><code>----------------</code></pre> 
          <pre data-prefix="6">
            <code>- bảng tính WT:</code>
            <code>  https://docs.google.com/spreadsheets/d/1A-J5gifZtwgBL1_WzR9eXIM4InxccwyIc5f998ZPKXM/edit?usp=sharing  </code>
          </pre>
          <pre data-prefix=">" className="text-success"><code>----------------</code></pre> 
          <pre data-prefix="6">
            <code>- rune forger:</code>
            <code>  https://docs.google.com/spreadsheets/d/1YsitZwVul10oZyEm1Qdi7hG7Jzrh-tG-hq4uKK_WlIU/edit#gid=1623023431  </code>
          </pre>
        </div>
      </main>
   </>
  )
}

export default Docs;
