"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Video = () => {
  const router = useRouter();

  const video = {
    title: "Hello",
    publishTime: "1000-10-01",
    description:
      "sfhjrtjtrhrsfscsasfhjrtjtrsfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufkhrsfscsakjcnkfqufksfhjsfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufkrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufksfhjrtjtrhrsfscsakjcnkfqufk",
    channelTitle: "Channel",
    viewCount: 100,
  };
  let [isOpen, setIsOpen] = useState(false);
  const videoId = useSearchParams().get("videoId");
  function closeModal(value: boolean): void {
    setIsOpen(false);
  }

  return (
    <div className="items-center justify-center flex w-screen h-screen">
      <button onClick={() => setIsOpen(true)}>show</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-10"} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-green-500 bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={
                    "w-full max-w-3xl transform overflow-hidden rounded-2xl bg-black/25 p-6  text-left align-middle shadow-xl text-black transition-all"
                  }
                >
                  <iframe
                    id="ytplayer"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                    className="rounded-md"
                    // type="text/html"
                    width="100%"
                    height={"360"}
                  ></iframe>
                </Dialog.Panel>
              </Transition.Child>

            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Video;
