var tipuesearch = {"pages": [{'title': 'Home', 'text': '', 'tags': '', 'url': 'Home.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'W6', 'text': '\n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': 'wcm w8 第一段錄影 \n wcm w8 第二段錄影 \n wcm w8 第三段錄影 \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': 'wcm w9 直播錄影 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '說明如何利用 Python 程式讀取學員修課檔案, 以及從 Google Sheet 轉出的 .csv, 分別處理為 List 與 Dictionary 資料格式之後, 逐一根據學員 List 學號, 從 Dictionary 取出自評成績. \n import csv\n \n# read student list\n \nfilename = \'E:/wcm2020/data/tmp/2020_spring_score/2a/2a_list.txt\'\nwith open(filename, encoding="utf-8") as f:\n    content = f.readlines()\n#print(content)\nstudent = [x.strip() for x in content] \n#print(student)\n \n \n# Timestamp, email, 修課名稱, url, score, desp, memo\n# 0, 1, 2, 3, 4, 5, 6\n#total = 0\nall = {}\nwith open(\'y:/2020midterm.csv\', encoding="utf-8") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=\',\')\n    #print(csv_reader)\n \n    line_count = 0\n    for row in csv_reader:\n        if line_count == 0:\n            #print(f\'Column names are {", ".join(row)}\')\n            line_count += 1\n        else:\n            student_num = row[1].split("@")[0]\n            #print(student_num)\n            student_score = row[4]\n            #print(student_score)\n            try:\n                all.update({student_num: student_score})\n            except:\n                all.update({student_num: "error"})\n            #print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\')\n            #print(f\'\\t{row[4]}\')\n            #total += int(row[4])\n            line_count += 1\n#print(all)\n#print(student)\n \n \nfor i in student:\n     \n    #if i in all:\n        #pass\n    #else:\n        #print(str(i))\n     \n    try:\n        print(i + "\\t" + all[i])\n    except:\n        print(i + "\\t60")\n \n    #print(f\'Processed {line_count} lines.\')\n    #print("平均=" + str(total/line_count)) \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '1 \n', 'tags': '', 'url': 'W12.html'}]};