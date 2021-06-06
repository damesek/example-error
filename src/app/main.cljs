(ns app.main
  (:require ["react-day-picker" :as dp]
            [reagent.core :as r]))

;; App

(defn example-app []
  [:p
   [:div "Here is a day picker:"]
   [:> dp/DayPicker]])

;; App initialization

(defn mount-root []
  (r/render [example-app] (.getElementById js/document "app")))

(defn main! []
  (mount-root)
  (println "[core]: loading"))

(defn reload! []
  (mount-root)
  (println "[core] reloaded"))
