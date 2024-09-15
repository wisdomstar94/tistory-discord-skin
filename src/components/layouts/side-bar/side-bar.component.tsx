import { TistoryLogo } from "@/components/icons/tistory-logo/tistory-logo.component";
import { Script } from "@/components/script/script.component";
import { cn } from "@/utils/cn";
import { Bell, NotebookPen, Plus, Search, Settings } from "lucide-react";
import "./side-bar.scss";
import { SmallSymbolButton } from "@/components/small-symbol-button/small-symbol-button.component";
import { SmallSideBarDivider } from "@/components/small-side-bar-divider/small-side-bar-divider.component";
import { HomeIcon } from "@/components/icons/home-icon/home-icon.component";
import { BlogTitleBar } from "@/components/blog-title-bar/blog-title-bar.component";

export function SideBar() {
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 z-[2] bg-black/70 w-0 h-0 overflow-hidden",
          "side-bar-open:!animate-fade-in-opacity side-bar-close:!animate-fade-out-opacity"
        )}
        tt-onclick="mobileSideBarBackgroundClick();"
      />

      <aside
        className={cn(
          "w-side-bar-width h-full fixed top-0 flex flex-nowrap bg-primary z-[2]",
          "transition-all duration-300",
          "-left-side-bar-width lg:left-0 side-bar-open:left-0 side-bar-close:-left-side-bar-inner-small-bar-width"
        )}
      >
        {/* small bar */}
        <div
          className={cn(
            "w-side-bar-inner-small-bar-width h-full flex flex-wrap flex-shrink-0 gap-2 relative z-[3] items-start content-start"
          )}
        >
          <div className={cn("side-small-bar-scroll-area", "w-full h-full relative", "overflow-y-scroll", "scrollbar-hidden")}>
            <ul className="w-full flex flex-wrap relative items-start content-start mt-2">
              <s_sidebar>
                <s_sidebar_element>
                  <tt_html_comment>[small] 티스토리 홈 버튼</tt_html_comment>
                  <li className="w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-tistory-home-a"
                      href="https://www.tistory.com/"
                      aClassName="hover:bg-primary-tistory group-[.menu-active]:bg-primary-tistory"
                      icon={<TistoryLogo className="text-white/80 w-[24px] h-[24px] inline-flex" />}
                      hoverTitle={"티스토리 홈"}
                      isHoverMinimumActive={true}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 구분 선 (divider)</tt_html_comment>
                  <li className="w-full block relative box-border">
                    <SmallSideBarDivider />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 블로그 홈 버튼</tt_html_comment>
                  <li className="w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-blog-home-a"
                      href="/"
                      icon={
                        <>
                          <img src="[##_image_##]" alt="프로필사진" className="w-full h-full relative object-cover object-center" />
                        </>
                      }
                      hoverTitle={"[##_blogger_##] 사과 바나나 키위 메론"}
                      hoverTitleIcon={
                        <div className="mt-[4px]">
                          <HomeIcon />
                        </div>
                      }
                      isActive={true}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 방명록 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-guest-book-a"
                      href="/guestbook"
                      aClassName="hover:bg-primary-active group-[.menu-active]:bg-primary-active"
                      icon={<NotebookPen className="text-white/80" />}
                      hoverTitle={"방명록"}
                      isHoverMinimumActive={true}
                    />
                    <Script
                      html={`
                        (function(){
                          const pathname = location.pathname;
                          if (!pathname.startsWith('/guestbook')) return;

                          const a = document.querySelector('#side-bar-guest-book-a');
                          if (a === null) return;

                          a.parentElement?.parentElement?.classList.add('menu-active');
                        })();
                      `}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 공지사항 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-notice-a"
                      href="/notice"
                      aClassName="hover:bg-primary-active group-[.menu-active]:bg-primary-active"
                      icon={<Bell className="text-white/80" />}
                      hoverTitle={"공지사항"}
                      isHoverMinimumActive={true}
                    />
                    <Script
                      html={`
                        (function(){
                          const pathname = location.pathname;
                          if (!pathname.startsWith('/notice')) return;

                          const a = document.querySelector('#side-bar-notice-a');
                          if (a === null) return;

                          a.parentElement?.parentElement?.classList.add('menu-active');
                        })();
                      `}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 글 작성 페이지 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-manage-post-a"
                      href="/manage/post"
                      aClassName="hover:bg-secondary group-[.menu-active]:bg-secondary"
                      icon={<Plus className="text-secondary group-hover/side-item-a:text-white/80 transition-all" />}
                      hoverTitle={"글 작성"}
                    />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 구분 선 (divider)</tt_html_comment>
                  <li className="w-full block relative box-border">
                    <SmallSideBarDivider />
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[small] 블로그 관리 페이지 버튼</tt_html_comment>
                  <li className="group w-full flex fle-wrap relative box-border">
                    <SmallSymbolButton
                      id="side-bar-blog-manage-a"
                      href="/manage"
                      aClassName="hover:bg-secondary group-[.menu-active]:bg-secondary"
                      icon={<Settings className="text-secondary group-hover/side-item-a:text-white/80 transition-all" />}
                      hoverTitle={"블로그 관리"}
                      isHoverMinimumActive={true}
                    />
                  </li>
                </s_sidebar_element>
              </s_sidebar>
            </ul>
          </div>
        </div>

        {/* big bar */}
        <div className={cn("w-side-bar-inner-big-bar-width", "w-full h-full flex flex-wrap gap-2 relative", "bg-primary-2")}>
          <div className={cn("side-big-bar-scroll-area", "w-full h-full overflow-y-scroll scrollbar-hidden block relative")}>
            <div className={cn("blog-title-bar-float-container", "w-full block h-[48px] top-0 left-0 sticky z-[2]")}>
              <div className="background w-full h-full bg-primary-2 absolute top-0 left-0 opacity-0"></div>
              <BlogTitleBar />
              <div className="background-bottom-border w-full h-[2px] bg-primary/80 absolute bottom-[-2px] left-0 opacity-0"></div>
            </div>
            <div className="w-full mt-[-48px]"></div>
            <ul className="w-full flex flex-wrap relative gap-3 items-start content-start side-big-bar">
              <s_sidebar>
                <s_sidebar_element>
                  <tt_html_comment>[big] 블로그 프로필 영역</tt_html_comment>
                  <li className="w-full flex flex-wrap relative side-blog-profile-item h-[136px]">
                    <div className="w-full h-full block absolute top-0 left-0">
                      {/* blog profile */}
                      <div className="w-full relative h-[136px]">
                        {/* back */}
                        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden">
                          <img
                            src="[##_image_##]"
                            alt="프로필사진"
                            className={cn("profile-image", "w-full h-full relative object-cover object-center flex-shrink-0")}
                          />
                        </div>
                        <div className={cn("movable-profile-area-overlay-bg", "w-full h-full bg-primary-2 opacity-0 relative")}></div>
                        <div className="movable-blog-title-bar">
                          <BlogTitleBar />
                        </div>
                      </div>
                    </div>
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 검색 영역</tt_html_comment>
                  <li className="w-full flex flex-wrap relative">
                    <div className="w-full box-border px-3 relative">
                      <div className="w-full flex flex-nowrap gap-2 relative">
                        <input
                          type="text"
                          placeholder="검색하기"
                          className={cn(
                            "w-full relative bg-primary text-sm box-border px-2 py-1 pr-8",
                            "text-white/80 placeholder:text-primary-foreground",
                            "focus:outline-none"
                          )}
                          name="[##_search_name_##]"
                          tt-value="[##_search_text_##]"
                          tt-onkeypress="if (event.keyCode == 13) { [##_search_onclick_submit_##] }"
                        />
                        <div className="absolute top-[50%] right-0 flex items-center content-center justify-end h-0">
                          <button className="p-2 cursor-pointer" tt-onclick="[##_search_onclick_submit_##]">
                            <Search className="text-primary-foreground w-[20px] h-[20px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </s_sidebar_element>
                <s_sidebar_element>
                  <tt_html_comment>[big] 글 카테고리 메뉴 영역</tt_html_comment>
                  <li className="w-full flex flex-wrap relative">
                    <div className="w-full block relative text-sm text-primary-foreground">[##_category_list_##]</div>
                  </li>
                </s_sidebar_element>
              </s_sidebar>
            </ul>
          </div>
        </div>
      </aside>
      <Script
        html={`
          checkActiveCategory();
        `}
      />
    </>
  );
}
