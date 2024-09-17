import { ArrowRightToLine, Bell, BookText, FileLock } from "lucide-react";
import { IPostsPermalinkItem } from "./posts-permalink-item.type";
import { cn } from "@/utils/cn";
import "./posts-permalink-item.scss";
import { ContentDivider } from "@/components/content-divider/content-divider.component";
import { CommentList } from "@/components/commnet-list/commnet-list.component";
import { SmallDatetimeInline } from "@/small-datetime-inline/small-datetime-inline.component";
import { CommentInputForm } from "@/components/commnet-input-form/comment-input-form.component";

export function PostsPermalinkItem(props: IPostsPermalinkItem.Props) {
  const { postType } = props;

  const prefix = (function () {
    // if (postType === "notice") {
    //   return "article";
    // }
    return "article";
  })();

  return (
    <>
      <li className="w-full flex flex-wrap gap-3 relative pt-content-area-padding">
        <div className="w-full flex flex-wrap relative px-content-area-padding box-border">
          <div className="bg-murky-color-1 rounded-full p-3">
            {postType === "normal" && <BookText className="text-light-color-3/70 w-10 h-10" />}
            {postType === "notice" && <Bell className="text-light-color-3/70 w-10 h-10" />}
            {postType === "protected" && <FileLock className="text-light-color-3/70 w-10 h-10" />}
          </div>
        </div>
        <div className={cn("w-full flex flex-wrap relative", "text-light-color-3/90 text-3xl", "px-content-area-padding")}>
          {`[##_${prefix}_rep_title_##]`}
        </div>
        <ContentDivider
          className={cn("mt-6 mb-2")}
        >{`[##_${prefix}_rep_date_year_##]년 [##_${prefix}_rep_date_month_##]월 [##_${prefix}_rep_date_day_##]일`}</ContentDivider>
        <div className="w-full flex gap-4 relative group py-1 px-content-area-padding">
          <div className="w-full flex flex-wrap gap-2 relative">
            <ul className="w-full flex flex-wrap gap-1 relative items-center">
              <li className="inline-flex text-light-color-5 font-medium">{`[##_${prefix}_rep_author_##]`}</li>
              <li className="inline-flex mr-1">
                <div className="inline-flex px-1 relative text-xs rounded-md bg-light-color-6 text-light-color-7 font-bold">작성자</div>
              </li>
              <li className="inline-flex flex-wrap gap-1 relative items-center">
                <SmallDatetimeInline
                  replacer={{
                    yearReplacer: `[##_${prefix}_rep_date_year_##]`,
                    monthReplacer: `[##_${prefix}_rep_date_month_##]`,
                    dayReplacer: `[##_${prefix}_rep_date_day_##]`,
                    hourReplacer: `[##_${prefix}_rep_date_hour_##]`,
                    minuteReplacer: `[##_${prefix}_rep_date_minute_##]`,
                  }}
                />
              </li>
            </ul>
            <div className="w-full block relative text-light-color-3/80">
              {postType !== "protected" && `[##_${prefix}_rep_desc_##]`}
              {postType === "protected" && (
                <>
                  <ul className="w-full flex flex-wrap gap-2 relative box-border">
                    <li className={cn("w-full flex flex-wrap gap-2 relative box-border", "text-light-color-3/70")}>
                      보호되어 있는 글입니다. 내용을 보시려면 비밀번호를 입력하세요.
                    </li>
                    <li className={cn("w-full flex gap-2 relative box-border items-center", "text-light-color-3/60")}>
                      <label
                        htmlFor="[##_article_password_##]"
                        className="text-light-color-3/60 text-sm whitespace-nowrap flex-grow-0 flex-shrink-0"
                      >
                        비밀번호 :
                      </label>
                      <input
                        type="password"
                        className={cn(
                          "text-light-color-3/60 placeholder:text-light-color-3/20 text-sm p-2",
                          "focus:outline-none",
                          "bg-transparent",
                          "min-w-0 overflow-hidden"
                        )}
                        maxLength={16}
                        id="[##_article_password_##]"
                        name="[##_article_password_##]"
                        placeholder="비밀번호를 입력하세요."
                        tt-value=""
                        tt-onkeydown="if (event.keyCode == 13)[##_article_dissolve_##]"
                      />
                      <button
                        className="cursor-pointer inline-flex p-1 hover:bg-murky-color-1 rounded-lg whitespace-nowrap flex-grow-0 flex-shrink-0"
                        tt-onclick="[##_article_dissolve_##]"
                      >
                        <ArrowRightToLine className="text-light-color-3/60" />
                      </button>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>

        {postType !== "protected" && (
          <>
            <ContentDivider className={cn("mt-6 mb-2")}>
              댓글 <s_rp_count>({`[##_${prefix}_rep_rp_cnt_##]`})</s_rp_count>
            </ContentDivider>
            {/* <div className="w-full h-1 bg-light-color-2/30 flex flex-wrap gap-2 relative mb-2"></div> */}
            <s_rp>
              <CommentList />
              <div className="w-full h-[24px]"></div>
              <s_rp_input_form>
                <CommentInputForm />
              </s_rp_input_form>
            </s_rp>
          </>
        )}
      </li>
    </>
  );
}
