import PeopleIcon from "../../asset/icons/people";
import CommunityIcon from "../../asset/icons/community";
import VideoIcon from "../../asset/icons/video";

export default function CatalogSection() {
  return (
    <div className="grid gap-4">
      <div className="bg-white text-2xl p-4 font-bold rounded-xxl mt-3 mx-3 sm:mx-0">
        สำรวจ
      </div>
      <div className="flex gap-3 md:gap-4 pb-4">
        <button className="text-black font-bold hover:no-underline bg-white flex-1 rounded-input flex flex-col gap-1 items-center justify-center py-4">
          <PeopleIcon />
          <div>พอดแคสต์</div>
        </button>
        <button className="text-black font-bold hover:no-underline bg-white flex-1 rounded-input flex flex-col gap-1 items-center justify-center py-4">
          <VideoIcon />
          <div>วิดีโอ</div>
        </button>
        <button className="text-black font-bold hover:no-underline bg-white flex-1 rounded-input flex flex-col gap-1 items-center justify-center py-4">
          <CommunityIcon />
          <div>ชุมชน</div>
        </button>
      </div>
    </div>
  );
}
