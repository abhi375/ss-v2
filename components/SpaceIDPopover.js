import { selectSpaceId } from "@/lib/session";
import { AnimatePresence, motion } from "framer-motion";

export default function SpaceIDPopover({ accounts }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="absolute px-6 py-3 w-64 -left-8 top-16 bg-white z-10 shadow-sm origin-top"
      >
        {accounts &&
          accounts.map((acc) => {
            const space = acc[0].split("_")[1];
            const data = acc[1];
            const profilePicUrl = `${data.BASE_URL}/manage/api/user/image/${data.userId}.jpg`;
            return (
              <div
                key={`space-row-${acc[0]}`}
                className="flex items-center justify-start p-2 mb-1.5 rounded-md transition group hover:bg-accent hover:bg-opacity-10"
                onClick={() => selectSpaceId(acc)}
                role="button"
                tabIndex={0}
              >
                <div
                  className="w-10 h-10 rounded-full font-semibold flex items-center justify-center bg-cover bg-center mr-2.5"
                  style={{
                    backgroundImage: `url(${profilePicUrl})`,
                  }}
                />
                <div className=" flex flex-col overflow-ellipsis overflow-hidden">
                  <div className="font-medium group-hover:text-accent text-sm">
                    {data.name}
                  </div>
                  <small className="text-black opacity-60 font-medium">
                    {space}
                  </small>
                </div>
              </div>
            );
          })}

        <div className="border-t text-[14px] border-gray-200 border-solid py-2 mt-2">
          <a
            className="text-accent font-medium hover:underline"
            href="https://www.samespace.com/login/"
          >
            Sign in to another space
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
